const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function extractPdfStreams(pdfPath) {
  const buf = fs.readFileSync(pdfPath);
  let allText = '';
  
  let pos = 0;
  while (pos < buf.length) {
    const streamStart = buf.indexOf('stream', pos);
    if (streamStart === -1) break;
    
    // Find newline after stream
    let dataStart = streamStart + 6;
    if (buf[dataStart] === 0x0d && buf[dataStart + 1] === 0x0a) {
      dataStart += 2;
    } else if (buf[dataStart] === 0x0a || buf[dataStart] === 0x0d) {
      dataStart += 1;
    }
    
    const streamEnd = buf.indexOf('endstream', dataStart);
    if (streamEnd === -1) break;
    
    const chunk = buf.subarray(dataStart, streamEnd);
    try {
      const decompressed = zlib.inflateSync(chunk);
      allText += decompressed.toString('utf8') + '\n';
    } catch (e) {
      // not a flate stream or uncompressed
    }
    pos = streamEnd + 9;
  }
  
  // Extract text within BT ... ET blocks and TJ/Tj operators
  const textMatches = [...allText.matchAll(/\((.*?)\)\s*Tj|\[(.*?)\]\s*TJ/gs)];
  let extracted = '';
  for (const m of textMatches) {
    if (m[1]) {
      extracted += m[1] + ' ';
    } else if (m[2]) {
      // Array of strings and numbers
      const sub = [...m[2].matchAll(/\((.*?)\)/gs)].map(x => x[1]).join('');
      extracted += sub + ' ';
    }
  }
  
  console.log(`Extracted text length: ${extracted.length}`);
  
  // Search for evidence sections
  const regex = /Part \d evidence|SUBMISSION\.md|Part 1 evidence|Part 2 evidence|Part 3 evidence|evidence/gi;
  let match;
  while ((match = regex.exec(extracted)) !== null) {
    const s = Math.max(0, match.index - 50);
    const e = Math.min(extracted.length, match.index + 350);
    console.log('------------------------------------');
    console.log(extracted.substring(s, e));
  }
}

extractPdfStreams(path.resolve(__dirname, '../evidence/final-graduation-task (1) (3).pdf'));
