var http = require("http")

http.createServer((req , res)=>{
   res.writeHead(200,{"Context-Type":"text/html"});
   res.write(req.url);
   res.write("HelloWorld")
   res.end();
}).listen(8080);