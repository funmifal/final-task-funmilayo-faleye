const path = require('path');
const ExcelJS = require('exceljs');
const fs = require('fs');

async function verifyTracker() {
  const trackerPath = path.resolve(__dirname, '../tracker/Job_Leads_Tracker.xlsx');
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(trackerPath);

  const expectedSheets = ['Leads', 'Daily log', 'Message library', 'Weekly review'];
  const actualSheets = workbook.worksheets.map(w => w.name);
  console.log('Worksheet names:', actualSheets);
  if (JSON.stringify(actualSheets) !== JSON.stringify(expectedSheets)) {
    throw new Error('Worksheet names mismatch');
  }

  const leadsSheet = workbook.getWorksheet('Leads');
  console.log(`Leads sheet total rows: ${leadsSheet.rowCount}`);

  // Print first 5 rows of leads
  for (let r = 2; r <= 21; r++) {
    const row = leadsSheet.getRow(r);
    console.log(`Row ${r}: ID=${row.getCell(1).value}, Comp=${row.getCell(3).value}, Person=${row.getCell(8).value}, Stage=${row.getCell(14).value}`);
  }

  // Check Daily log
  const dailySheet = workbook.getWorksheet('Daily log');
  console.log(`Daily log row 2 Leads added: ${dailySheet.getRow(2).getCell(2).value}`);

  // Check Message library
  const msgSheet = workbook.getWorksheet('Message library');
  console.log(`Message library row 2 formula: ${JSON.stringify(msgSheet.getRow(2).getCell(6).value)}`);

  // Check Weekly review
  const weeklySheet = workbook.getWorksheet('Weekly review');
  console.log(`Weekly review row 2 leads formula: ${JSON.stringify(weeklySheet.getRow(2).getCell(2).value)}`);

  console.log('Verification PASSED!');
}

verifyTracker().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
