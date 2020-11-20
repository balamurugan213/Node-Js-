
const http =require('http');
const fs = require('fs');
const _ =require('lodash'); 


/* execute when a request in made */
const server =http.createServer((req,res)=>{

    // lodash
    const num=_.random(0,20);
    console.log(num);

    const greet = _.once(() =>{
        console.log('hello');
    });

    greet();
    greet();

    console.log('request made');
    console.log(req.url,req.method);

/* set herder content type */
    res.setHeader('Content-Type','text/html');

    let path='./views/';
    switch(req.url)
    {
        case '/':
            path+= 'index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        case '/about-me':
            // path+='about.html';
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode=404;
            break;
    }


    fs.readFile(path,(err, data) =>{
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