const mongoose = require("mongoose");

//USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});

//short version, we could have created the model first
//and used post as the export
module.exports = mongoose.model("User", userSchema);
