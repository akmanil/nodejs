const http = require("http");

function app(req ,res){
    res.writeHead(200);
    res.end("Hello World");
    // res.end()
}

http.createServer((req ,res) =>{
    if(req.url === "/"){
        return app(req,res);
    }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}).listen(3000)