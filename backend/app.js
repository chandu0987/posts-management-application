const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/post");
const mongoose = require("mongoose");
const { title } = require("process");
const app = express();

mongoose
  .connect(
    "mongodb+srv://max:NRjvGjgYeRgOgLbD@cluster0.0y8j8.mongodb.net/node-angular?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Connected to Database :)");
  })
  .catch((e) => {
    console.log(`${e}-Connection failed!`);
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
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
app.get("/api/posts", (req, res, next) => {
  Post.find()
    .then((documents) => {
      const posts = [];
      if (documents.length > 0) {
        documents.forEach((element) => {
          posts.push({
            title: element.title,
            content: element.content,
            id: element._id,
          });
        });
      }
      res.status(200).json({
        message: "Posts fetched successfully",
        posts,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
});

app.delete("/api/posts/:id", (req, res, next) => {
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
module.exports = app;
