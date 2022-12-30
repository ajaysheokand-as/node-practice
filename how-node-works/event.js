const EventEmitter = require('events');
const http = require("http");

class Sales extends EventEmitter {
    constructor(){
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () =>{
    console.log('There was a new sale!');
})

myEmitter.on('newSale',()=>{
console.log("This is customer name");
} )

myEmitter.on('newSale', stock=>{
    console.log(`There are ${stock} items left`);
})

myEmitter.emit("newSale", 9);


///////////////////////////////////////////////


const server = http.createServer();

server.on('request', (req, res)=>{
    console.log("Req Received");
    console.log(req.url);
    res.end('Req Reveived');
})

server.on('request', (req, res)=>{
    console.log("Another Req Received");
    res.end('Another Req Reveived');
})

server.on('close', ()=>{
    console.log("Server is closed");
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("Wating for Request")
})
