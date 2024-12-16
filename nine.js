const http = require("http");
//its used for loading http module


//it is used for creating a server
http.createServer((request ,response) =>{

    //tell the browser every things are ok using head 200
    response.writeHead(200,{
        "Content-Type" : "text/plain"
    })
    response.write("Helloworld");
    //it will be used to write the code in that page of that server
    response.end();
    //used for that code is all the response header and body will be send 
}).listen(3000)