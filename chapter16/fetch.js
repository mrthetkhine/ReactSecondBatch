const https = require("https");
const axios = require("axios");
https.get("https://jsonplaceholder.typicode.com/todos/1",(response)=>{
    //console.log("Got data ",response);
    response.on("data",(data)=>{
        console.log("Data is ",data.toString());
    });
});
//console.log("Response ",response);
axios.get("https://jsonplaceholder.typicode.com/todos/1")
     .then(response=>{
         console.log("Response ",response.data);
     });