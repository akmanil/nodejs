var fs = require("fs")

fs.appendFile("MyFile.txt" ,"Hello" ,function(err){
    if(err) throw err;
    console.log("Saved!");
})

fs.open("myFile2.txt" , "w" ,function(err,file){
    if (err) throw err;
    console.log("Saved")
});

fs.writeFile("MyFile.txt" ,"Added content that will be added using writeFile" ,function(err){
    if(err) throw err;
    console.log("Saved");
})