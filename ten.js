//creating aserver using express
const express = require("express")
const app = express();

const port = 3000;

app.get("/" , (req ,res)=>{
    res.send("Hello Express App");
})

app.listen(port ,()=>{
    console.log(`Server listen port is http://localhost:${port} `)
})