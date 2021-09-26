const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start",(event)=>{
    console.log("Start event ",event);
});

eventEmitter.emit("start",{
    data : "This is data to event"
});