const http = require('http');
const url = require('url')

const server = http.createServer((req, res)=>{
    const parsedUrl = url.parse(req.url, true);
    if(parsedUrl.pathname === '/'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('Hello World!');
    }
    else{
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end('Page not found');
    };
})


server.listen(3000,()=>{
    console.log("server running at port 3000");
});