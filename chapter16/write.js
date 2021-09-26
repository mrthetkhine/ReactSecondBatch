const fs = require("fs");
let output = fs.createWriteStream("numbers.txt");
for(let i=0;i<100;i++)
{
    output.write(`${i}\n`);
}
output.end();