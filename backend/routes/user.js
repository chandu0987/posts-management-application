const User = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/signup", (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => hash)
    .then((hash) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => {
          res.status(201).json({
            message: "User registered successfully",
          });
        })
        .catch((message) => {
          res.status(500).json({
            message,
          });
        });
    });
});

module.exports = router;
