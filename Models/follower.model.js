const mongoose = require("mongoose");

const FollowerSchema = new mongoose.Schema({
  name: String,
  status: String,
  photoUrl: String,
  follower: Number,
});
module.exports = mongoose.model("followers", FollowerSchema);
