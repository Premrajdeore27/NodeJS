const express = require("express");

const port = 9000;
//Creating app object
const  app = express();

app.get("/",(req,res)=>{
    res.send("Welcome NodeJS")
    res.send('<h1>Assignment-2</h1>')
}).listen(port)


