const path = require("path");
fileName = __filename;
console.log("File name ",__filename);
console.log("Dir name ",__dirname);

console.log("Basenane ",path.basename(fileName));
console.log("Ext ",path.extname(fileName));
console.log("Dir ",path.dirname(fileName));

console.log("Normalized " , path.normalize("a/b/c/../d"));