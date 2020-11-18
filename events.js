 const EventEmitter = require("events");
const http = require('http'); 
 
 class Sales extends EventEmitter{
 
    constructor(){
  
super(); // accessing all the method of parent class

    }


 }

const myEmitter= new Sales ();  //instance of evnet emitter

myEmitter.on('newSale', () => {

console.log('there was a new sale');

});

myEmitter.on("newSale", () => {

console.log ("consumer name: ahamedh");
});

myEmitter.on("newSale", stock => {
console.log(`There are now ${stock} item left in stock`) 
});
myEmitter.emit("newSale", 9);

//////////////////////////////////////
// listen multiple times for same events

const server = http.createServer();

server.on ("request", (req, res) => {
console.log("r1");
console.log(req.url);
res.end("request recived");

});

server.on ("request", (req, res) => {
    console.log("r2");
    });
    
server.on ("request", (req, res) => {
        console.log("r3");
            });

server.listen(8000, "127.0.0.1", () => {

    console.log("waiting for request...");
})

    