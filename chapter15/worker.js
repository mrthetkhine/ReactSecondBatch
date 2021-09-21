console.log("Worker run");
self.onmessage=msg=>{
    console.log("Worker got message ",msg.data);
    self.postMessage("Reply from woker "+msg.data.toUpperCase())
};