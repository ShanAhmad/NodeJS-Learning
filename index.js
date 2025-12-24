const fs = require('fs');
const http = require('http');
const url = require('url');

//File Read and Write Operations

//Synchronus call
//const textInput = fs.readFileSync('./txt/input.txt','utf-8');
//console.log(textInput);

//const textOutput = `This is a new line of text. ${textInput}.`
//fs.writeFileSync('./txt/output.txt',textOutput);

//Asynchronus call
// fs.readFile('./txt/start.txt','utf-8',(err,data1) => {
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt','utf-8',(err,data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`,'utf-8',err => {
//                 console.log("File has been written");
//             });
//         });
//     });
// });
// console.log("Waiting");

//Server Operations

const data = fs.readFileSync('./dev-data/data.json','utf-8');

const server = http.createServer((req,res) => {
   const pathName = req.url;
   if(pathName === '/' || pathName === '/overview'){
    res.end("This is the overview");
   }else if(pathName === '/product'){
    res.end("This is the product");
   }else if(pathName === '/api'){
    res.writeHead(200,{
        'Content-Type': 'application/json'
    });
    res.end(data);
   }else{
    res.writeHead(404,{
        'Content-Type': 'text/html',
        'my-own-header': 'hello-world'
    });
    res.end('<h1>Page Not Found</h1>');
   }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to request on port 8000");
});