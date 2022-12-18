const fs = require('fs');
const http = require('http');
const url = require('url');

/////////////////////////////////////////////////////
//Files

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is Testing of text write in file. Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log("File Written");

// fs.readFile('./txt/start.txt', 'utf-8', (err, data)=>{
//     console.log(data)
// });
// console.log("Will read file.");

////////////////////////////////////////////////////
// SERVER
const server = http.createServer((req, res)=>{
    const pathName = req.url;
    if(pathName == "/"){
        res.end('Default Path');
    }else if(pathName== "/overview"){
        res.end('This is overview');
    }else{
        res.writeHead(404,{
            "content-type":"text/html",
            "own-haeder":"own Header"
        });
        res.end("<h1>Page not Found</h1>");
    }

});

server.listen(8000, '127.0.0.1', ()=>{
    console.log("Listening to requests on port 8000");
})
