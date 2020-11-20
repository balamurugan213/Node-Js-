
/*
local host is  a loop back ip address so when the request is made by 
browser the browser connecting back to the computer and act as a host
(127.0.0.1)

port number specifiy the application and 3000 is user for local
web development
*/ 
const http =require('http');
const fs = require('fs'); 

/* execute when a request in made */
const server =http.createServer((req,res)=>{
    console.log('request made');
    console.log(req.url,req.method);

/* set herder content type */
    res.setHeader('Content-Type','text/html');

/* Writing the response  */
    // res.write("<h1>Hello sansa<h1>");
    // res.write("<h2>Narcos<h2>");

    fs.readFile('./view/index.html',(err, data) =>{
        if (err){
            console.log(err);
            res.end();
        }
        else{
            // res.write(data)
            res.end(data);
        }
    })

/* sending html file */
    

/* ending the request */
    // res.end();
})


/* listening for request */
server.listen(3000,'localhost',()=>{
    console.log('listening of req in port 3000');
})