const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const postsRoute = require('./routes/post');
const usersRoute = require('./routes/user');
const Post = require('./models/post')

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
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  next();
});

app.use('/api/posts', postsRoute);
app.use('/api/users', usersRoute);

module.exports = app;
