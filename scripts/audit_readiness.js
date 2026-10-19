const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

async function auditReadiness() {
  console.log('=== AUDITING GRADUATION DELIVERABLES ===');
  const workspaceRoot = path.resolve(__dirname, '..');

  // 1. Check workspace files
  const rootFiles = fs.readdirSync(workspaceRoot);
  console.log('Root files/folders in workspace:', rootFiles);

  const hasSubmissionMd = fs.existsSync(path.join(workspaceRoot, 'SUBMISSION.md'));
  console.log(`SUBMISSION.md present: ${hasSubmissionMd}`);

  // 2. Audit tracker/Job_Leads_Tracker.xlsx
  const trackerPath = path.join(workspaceRoot, 'tracker/Job_Leads_Tracker.xlsx');
  if (fs.existsSync(trackerPath)) {
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.readFile(trackerPath);
    console.log('Tracker sheets:', wb.worksheets.map(w => w.name));

    const leadsSheet = wb.getWorksheet('Leads');
    let totalLeadsCount = 0;
    let researchedCount = 0;
    let identifiedCount = 0;
    let verifiedContactCount = 0;

    leadsSheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        const leadId = row.getCell(1).value;
        const company = row.getCell(3).value;
        const person = row.getCell(8).value;
        const stage = row.getCell(14).value;
        const contactLink = row.getCell(10).value;

        if (company) {
          totalLeadsCount++;
          if (stage === 'Researched') researchedCount++;
          if (stage === 'Identified') identifiedCount++;
          if (person && person !== 'Not identified yet' && person !== 'Not verified') {
            verifiedContactCount++;
          }
        }
      }
    });

    console.log(`Leads Summary: Total company prospects with names = ${totalLeadsCount}`);
    console.log(`  Researched (with verified person & hiring signal) = ${researchedCount}`);
    console.log(`  Identified (unverified contact/closed/geo-restricted) = ${identifiedCount}`);
    console.log(`  Verified Contact Persons = ${verifiedContactCount}`);

    // Check Daily Log
    const dailySheet = wb.getWorksheet('Daily log');
    let loggedDaysCount = 0;
    dailySheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        const date = row.getCell(1).value;
        const leadsAdded = row.getCell(2).value;
        if (leadsAdded !== null && leadsAdded !== undefined) {
          loggedDaysCount++;
        }
      }
    });
    console.log(`Daily log entries populated: ${loggedDaysCount} / ${dailySheet.rowCount - 1} weekdays`);

    // Check Message Library
    const msgSheet = wb.getWorksheet('Message library');
    console.log(`Message library rows: ${msgSheet.rowCount - 1}`);

    // Check Weekly Review
    const weeklySheet = wb.getWorksheet('Weekly review');
    console.log(`Weekly review rows: ${weeklySheet.rowCount - 1}`);
  }

  // 3. Audit job-research/Product Engineer Job Tracker.xlsx
  const researchPath = path.join(workspaceRoot, 'job-research/Product Engineer Job Tracker.xlsx');
  if (fs.existsSync(researchPath)) {
    const wbRes = new ExcelJS.Workbook();
    await wbRes.xlsx.readFile(researchPath);
    const s1 = wbRes.worksheets[0];
    console.log(`\nJob Research Sheet: "${s1.name}" (Rows: ${s1.rowCount})`);
    s1.eachRow((row, rNum) => {
      console.log(`  Row ${rNum}: ${row.values.slice(1, 6).join(' | ')}`);
    });
  }
}

auditReadiness().catch(err => {
  console.error('Audit script error:', err);
});
