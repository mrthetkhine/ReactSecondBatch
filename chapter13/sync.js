const fs = require('fs')

console.log("Before read");
try {
  const data = fs.readFileSync('sync.js', 'utf8')
  console.log(">>",data ,"<<")
} catch (err) {
  console.error(err)
}
console.log("After read");