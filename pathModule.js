const path = require('path');

const a1 = path.basename('C:\\temp\\first.js');
console.log(a1);

const a2 = path.dirname('C:\\temp\\second.js');
console.log(a2);

const a3 = path.extname(__filename);
console.log(a3);