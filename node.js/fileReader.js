// Using Node.js fs module to read a file
const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:");
  console.log(data);
});
