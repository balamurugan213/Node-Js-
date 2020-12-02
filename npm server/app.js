const express=require('express');
const { cond, result } = require('lodash');
const morgan=require('morgan');
const mongoose=require('mongoose');
const { urlencoded } = require('express');
const { render } = require('ejs');
const blogroutes=require('./routes/blogRoutes');


// express app
const app = express();

// connecting mongo db
const DB_url='mongodb+srv://bala:hamlet213@blogpost.v7fd1.mongodb.net/Hamlet?retryWrites=true&w=majority';

mongoose.connect(DB_url, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => app.listen(3000))
.catch((err) => console.log('err',err));


// register view engine
app.set('view engine', 'ejs');

// middleware and static
app.use(express.static('assets'));
// 
app.use(express.urlencoded({extended:true}));


// 3 rd party middleware which giver req detail
app.use(morgan('dev'));


app.get('/',(req,res) =>{
    res.redirect('/blogs');
});

// about
app.get('/about',(req,res) =>{
    // res.send('<p>About page</p>');
    // res.sendFile('./views/about.html',{root: __dirname});
    res.render('about',{ title:'about'});
});
  
// redirect
app.get('/about-us',(req,res) =>{
    res.redirect('/about');
});

// blog router
app.use(blogroutes)

// 404 page
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root: __dirname});
    res.render('404',{ title:'404'});
});