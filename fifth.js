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
fs.appendFile("MyFile.txt" ,"This the added content added using append file but using the writeFile it will recreate ans delete every this what will there write what section is there in that this writefile and append file are using for update the content in the file" , function(err){
    if(err){
        throw err
    }
    console.log("updated");
})