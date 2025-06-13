// Using path and os modules
const path = require('path');
const os = require('os');

console.log("Current file path:", __filename);
console.log("Directory name:", path.dirname(__filename));
console.log("System uptime:", os.uptime(), "seconds");
console.log("User Info:", os.userInfo());
