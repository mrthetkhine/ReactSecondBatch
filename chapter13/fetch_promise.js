import fetch from 'node-fetch';
let url = "http://www.google.com"
fetch("url")
.then(response=>{
    console.log("Response ",response);
})