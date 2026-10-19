const fs = require('fs');

try {
  const buf = fs.readFileSync('C:/Users/Biggest Sam/Desktop/Funmilayo Faleye cv.pdf');
  const str = buf.toString('latin1');
  const matches = str.match(/https?:\/\/[^\s\)\>\"\'\\]+/g) || [];
  console.log('URLs in CV:', [...new Set(matches)]);
} catch (e) {
  console.log('Could not read CV:', e.message);
}
