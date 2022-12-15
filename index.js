const fs = require('fs');

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is Testing of text write in file. Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log("File Written");

fs.readFile('./txt/start.txt', 'utf-8', (err, data)=>{
    console.log(data)
});
console.log("Will read file.");