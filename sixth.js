var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      return res.end("404 Not Found");
    } 
    res.write((data));
    return res.end();
  });
}).listen(8080);