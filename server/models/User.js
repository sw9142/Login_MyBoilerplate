const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
  name: {
    type: String,
    required,
  },
  email: {
    type: String,
    unique,
    required,
  },
  password: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const UserModel = Mongoose.model("User", userSchema);
