const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET ALL POSTS
router.get('/', async (req,res) => {
    try{
      const posts = await Post.find();
      res.json(posts);
    }catch(err){
      res.json({ message:err });
    }
    res.send("We are on posts with client")
});

// GET A SPECIFIC POST
router.get('/:postId', async (req,res) => {
  try{
    const post = await Post.findById(req.params.postId)
    res.json(post);
  }catch(err){
    res.json({ message:err });
  }
});

// SUBMIT A POST
router.post('/', async (req,res) => {
  const post = new Post(req.body)
  try{
    const savedPost = await post.save();
    // console.log(post)
    res.json(savedPost);
  }catch(err){
    res.json({ message:err });
  }
});

// DELETE A POST
router.delete('/:postId', async (req,res) => {
  try{
    const removedPost = Post.remove({_id: req.params.postId})
    res.json(removedPost);
  }catch(err){
    res.json({ message:err });
  }
})

// UPDATE A POST
router.patch('/:postId', async (req,res) => {
  try{
    const updatedPost = Post.updateOne(
      {_id: req.params.postId},
      {$set: {
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        subtotal: req.body.subtotal,
        shipping: req.body.shipping,
        tax: req.body.tax,
        total: req.body.total
      } }
      )
    res.json(removedPost);
  }catch(err){
    res.json({ message:err });
  }
})

module.exports = router;



