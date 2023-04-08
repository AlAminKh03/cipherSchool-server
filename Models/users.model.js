const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: String,
    bio: String,

    facebook: String,
    instagram: String,
    linkedIn: String,
    github: String,
    twitter: String,
    website: String,
    education: String,
    profession: String,
    react: Boolean,
    typescript: Boolean,
    python: Boolean,
    anguler: Boolean,
    vue: Boolean,
    javascript: Boolean,
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
