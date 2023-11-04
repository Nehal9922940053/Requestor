const {createServer}= require('http');

const server =createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hello World!</h1>');
    return res.end();
});

server.listen(8000);