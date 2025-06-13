// A simple CLI tool using process.argv
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Usage: node cliTool.js <filename>");
  process.exit(1);
}

const fileName = args[0];
const fullPath = path.join(__dirname, fileName);

fs.readFile(fullPath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }
  console.log("File contents:");
  console.log(data);
});
