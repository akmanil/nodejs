// var http = require('http');
// var dt = require('./second');

// http.createServer((req ,res) =>{
//     res.write("The date is : " ,dt.myDateTime());
//     res.end();
// }).listen(8080);

//to start that server type <node file_name> in terminal
// that will host in the adress of browser - http://localhost:8080/


var http = require('http');
var dt = require('./second');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);