const EventEmitter = require("events");
const net = require("net");
//console.log("Event Emitter ",EventEmitter);

let server = net.createServer();
server.on("connection",socket=>{
    //console.log("Socket on ",socket);
    console.log("Got connection ");
    socket.end("Hello world frm node.js ","utf-8");
});
server.on("eror",(e)=>{
    console.log("Server error ",e);
});
server.listen(8080,()=>{
    console.log("Server listened")
});