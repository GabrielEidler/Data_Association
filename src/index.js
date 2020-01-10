// ===========================================================
// SETUP
// ===========================================================

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");
Post = require("../models/post");
User = require("../models/user");

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://gabrieleidler:theceltichero159357@cluster0-nh3lc.mongodb.net/test2?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// ===========================================================
// DATABASE STUFF
// ===========================================================

/* User.create(
  {
    email: "surfer1796@gmail.com",
    name: "Eric Colt"
  },
  (err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  }
); */

/* Post.create(
  {
    title: "Learning About Module Exports",
    content: "This is perfect for writing a modular, reusable and dry code"
  },
  (err, post) => {
    User.findOne({ email: "surfer1796@gmail.com" }, (err, foundUser) => {
      if (err) {
        console.log(err);
      } else {
        // push post id into user
        foundUser.posts.push(post);
        // save change into database
        foundUser.save((err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
); */

// FIND USER
//populate basically substitute the post's id in the user document by the actual posts
// exec starts the query
/* User.findOne({ email: "surfer1796@gmail.com" })
  .populate("posts")
  .exec((err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  }); */
// FIND ALL POSTS OF THE USER

// ===========================================================
// ROUTES
// ===========================================================

app.get("/", (req, res) => {
  res.send("Testing Response");
});

app.listen("8080", () => {
  console.log("server is on!");
});
