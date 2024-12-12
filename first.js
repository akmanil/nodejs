var http = require('http')

http.createServer((req ,res) =>{
    res.end('Hello World !')
}).listen(8080);

//to start that server type <node file_name> in terminal
// that will host in the adress of browser - http://localhost:8080/