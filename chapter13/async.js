const fs = require('fs');

console.log("Before file read");
fs.readFile('async.js', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("File read completed>>>",data ,"<<<");
})
console.log("After file read");