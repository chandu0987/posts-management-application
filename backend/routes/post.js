const Post = require("../models/post");
const express = require("express");
const router = express.Router()

router.post("/create-post", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post added successfully",
      });
    })
    .catch((message) => {
      res.status(500).json({
        message,
      });
    });
});

router.put("/update-post", (req, res, next) => {
  const {
    body: { title, content, _id },
  } = req;
  const post = new Post({
    title,
    content,
    _id,
  });
  Post.updateOne({ _id }, post)
    .then((updatedData) => {
      res.status(201).json({
        message: "Post updated successfully",
      });
    })
    .catch((message) => {
      res.status(500).json({
        message,
      });
    });
});

router.get("", (req, res, next) => {
  const pageSize = +req.query.pageSize;
  const currentPage = +req.query.currentPage;
  const postQuery = Post.find();
  let fetchedPosts ;
  if (pageSize && currentPage) {
    postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  postQuery
  .then((documents) => {
    fetchedPosts = documents;
    return Post.countDocuments();
  })
    .then((totalPostsCount) => {
      res.status(200).json({
        message: "Posts fetched successfully",
        totalPostsCount,
        posts: fetchedPosts,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
});

router.get("/:id", (req, res, next) => {
  const postId = req.params.id;
  Post.findById(postId)
    .then((document) => {
      document
        ? res.status(200).json({
            message: "Post fetched successfully",
            post: document,
          })
        : res.status(500).json({
            message: "Post not found!",
          });
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(201).json({
        message: "Post deleted successfully",
      });
    })
    .catch((deleteMessage) => {
      res.status(500).json({
        message: deleteMessage,
      });
    });
});

module.exports = router;
