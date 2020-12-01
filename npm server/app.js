const express=require('express');
const { cond, result } = require('lodash');
const morgan=require('morgan');
const mongoose=require('mongoose');
const Blog=require('./models/blog');
const { urlencoded } = require('express');
const { render } = require('ejs');

// express app
const app = express();

// connecting mongo db
const DB_url='mongodb+srv://bala:hamlet213@blogpost.v7fd1.mongodb.net/Hamlet?retryWrites=true&w=majority';

mongoose.connect(DB_url, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => app.listen(3000))
.catch((err) => console.log('err',err));


// register view engine
app.set('view engine', 'ejs');

// listening for request
// app.listen(3000);

/* sandbox routes
app.get('/add-blog',(req, res)=>{
    const blog= new Blog({
        title:'new blog',
        snippet:'abt hamlet',
        body:'hamlet is just a name'
    });

    blog.save().then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    });
})

app.get('/all-blog',(req, res)=>{
    
    Blog.find().then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    });
    //Blog.findById()
 })*/

// middleware and static
app.use(express.static('assets'));
app.use(express.urlencoded({extended:true}));

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
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    // res.render('index',{ title:'Home',blogs:blogs});
    
    
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:'All Blogs',blogs:result})
    })
    .catch((err)=>console.log(err));

   
});

app.get('/about',(req,res) =>{
    // res.send('<p>About page</p>');
    // res.sendFile('./views/about.html',{root: __dirname});
    res.render('about',{ title:'about'});
});

app.post('/blogs',(req,res) =>{
    const blog=new Blog(req.body);
    console.log(blog);
    blog.save()
    .then((result)=>{
        res.redirect('./');
    })
    .catch((err)=>{
        console.log(err);
    });
});

app.get('/blog/:id',(req,res) =>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('detail',{blog: result,title:'Blog detail'});
    })
    .catch(err =>{
        console.log(err);
    });
})

app.delete('/blog/:id',(req,res) =>{
    const id = req.params.id;
    console.log('idd',id)
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({
            redirect:'/'
        });
    })
    .catch(err =>{
        console.log(err);
    });
})

app.get('/blogs/create', (req, res) => {
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