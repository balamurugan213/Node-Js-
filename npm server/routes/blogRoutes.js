const express=require('express');
const Blog=require('../models/blog');
const router=express.Router()
const blogController= require('../controller/blogcontroller');
const blogcontroller = require('../controller/blogcontroller');


router.post('/blogs',blogcontroller.blog_create);

router.get('/blogs',blogController.blog_index);

router.get('/blog/:id',blogController.blog_details);

router.delete('/blog/:id',blogController.blog_delete);

router.get('/blogs/create',blogcontroller.create_blog);

module.exports=router;