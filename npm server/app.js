const express=require('express');
const { cond } = require('lodash');
const morgan=require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listening for request
app.listen(3000);


// middleware and static
app.use(express.static('assets'))


// middleware
// app.use((req ,res, next)=>{
//     console.log('Now a request is made');
//     console.log('host:',req.hostname);
//     console.log('path',req.path);
//     console.log('method:',req.method);
//     next();
// });

// 3 rd party middleware
app.use(morgan('dev'));


app.get('/',(req,res) =>{
    // res.send('<p>Home page</p>');
    // res.sendFile('./views/index.html',{root: __dirname});
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];

    res.render('index',{ title:'Home',blogs:blogs});
});

app.get('/about',(req,res) =>{
    // res.send('<p>About page</p>');
    // res.sendFile('./views/about.html',{root: __dirname});
    res.render('about',{ title:'about'});
});

app.get('/blog/create', (req, res) => {
    res.render('create',{ title:'Create a new blog'});
  });
  

// redirect
app.get('/about-us',(req,res) =>{
    res.redirect('/about');
});

// 404 page
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root: __dirname});
    res.render('404',{ title:'404'});
});