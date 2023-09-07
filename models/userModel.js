const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter the user name"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    fullname: {
      type: String,
      required: [true, "Please enter the full name"],
    },
    avatar: {
      type: String,
      required: false,
    },
    dateofbirth: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
