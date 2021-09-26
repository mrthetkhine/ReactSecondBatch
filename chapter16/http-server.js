const http = require('http'); 
const {promises: {readFile}} = require("fs");

http.createServer((request, response) => {
    
    let fileName = request.url.substring(1);
    console.log("File Name ",fileName);
    /*
    console.log("Request headers ",request.headers);
    console.log("Request url ",request.url);
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('<h1>Hello, World! </h1>\n');
    response.write(`<h1>Url=> ${request.url}! </h1>\n`);
    response.write(`<h1>method=> ${request.method}! </h1>\n`);
    response.end();
    */
   readFile(fileName).then(fileContent=>{
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    response.write(fileContent);
    response.end();
   }).catch(error=>{
    console.log("error ",error);
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    response.write("<h1>404</h1> Not Found");
    response.end();
  });

}).listen(8080); // 4