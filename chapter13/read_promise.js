const { fail } = require("assert");
const {promises: {readFile}} = require("fs");

console.log("Before file read");

readFile("async.js")
    .then(fileBuffer => {
        console.log("Data>> ",fileBuffer.toString());
        return fileBuffer.toString();
    },failure=>{
        console.log("got error ",failure);
        //throw new Error("Something worng")
    })
    .catch(error => {
        console.error("Errror=>",error.message);
        process.exit(1);
    }).then(res=>{
        console.log("Res ",res.length);
    });
console.log("After file read");