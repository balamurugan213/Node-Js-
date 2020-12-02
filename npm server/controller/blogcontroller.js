
const Blog=require('../models/blog');

const blog_index=(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:'All Blogs',blogs:result})
    })
    .catch((err)=>{
        console.log(err)
    });
}

const blog_details =(req,res) =>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('detail',{blog: result,title:'Blog detail'});
    })
    .catch(err =>{
        console.log(err);
    });
}

const blog_delete=(req,res) =>{
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
}

const create_blog= (req, res) => {
    res.render('create',{ title:'Create a new blog'});
  }

const blog_create=(req,res) =>{
    const blog=new Blog(req.body);
    console.log(blog);
    blog.save()
    .then((result)=>{
        res.redirect('./');
    })
    .catch((err)=>{
        console.log(err);
    });
}

module.exports={
    blog_index,
    blog_details,
    blog_delete,
    create_blog,
    blog_create
}

