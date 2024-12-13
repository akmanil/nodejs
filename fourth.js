// this is for file server fs in node.js

var http = require("http");
var fs = require("fs");

http.createServer((req,res)=>{
    fs.readFile("demo.html" , (err ,data) =>{
        res.write(data);
        return res.end();
    })
}).listen(8080);

/*
var http = require("http")
var fs = require("fs")

http.createServer((req ,res) =>{
    fs.readFile("file.html", (err ,data)=>{
        res.write(data);
        return res.end();
        })

    }).listen(8080);
*/