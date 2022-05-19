const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello World"); //Pass text data or string


       res.write(JSON.stringify({ id:1,name:"Prem",year:2020}))  //Pass JSON data 



          res.write("<h1>Hello Welcome</h1>"); //pass html response
        res.end();       
}).listen(9090)