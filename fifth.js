var fs = require("fs")

fs.appendFile("MyFile.txt" ,"Hello" ,function(err){
    if(err) throw err;
    console.log("Saved!");
})