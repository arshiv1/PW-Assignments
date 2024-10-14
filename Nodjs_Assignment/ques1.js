
const http = require('http');

const server = http.createServer((req,res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, Students!\n');
})

const port = 3000;
const host = 'localhost';

server.listen(port, host, ()=>{
    console.log("server running at port 3000");
});