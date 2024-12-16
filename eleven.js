const http = require("http");

function app(req ,res){
    res.writeHead(200);
    res.end("Hello World");
    // res.end()
}

//store  routes in an object
var routes ={
    '/app1' : function app1 (req ,res){
        res.writeHead(200);
        res.end("App1");
    }
 ,

    '/app1_about' : function about1(req ,res){
        res.writeHead(200);
        res.end("App1 About");
    }
}

http.createServer((req ,res) =>{
    if(req.url === "/"){
        return app(req,res);
    }
    else if (req.url in routes){
        return routes[req.url](req ,res);
    }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}).listen(3000)