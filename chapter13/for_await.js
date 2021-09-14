const fs = require("fs");
async function parseFile(filename) {
    let stream = fs.createReadStream(filename, { encoding:
                            "utf-8"});
    for await (let chunk of stream) {
        console.log("Chunk>> ",chunk ,"<<"); // Assume parseChunk() is defined elsewhere
    } 
}
console.log("Before parse");
parseFile("./ParallelPromise.html");
console.log("After parse");