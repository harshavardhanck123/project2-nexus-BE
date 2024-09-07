// models/User.js
const mongoose = require('mongoose');
const validate= require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength:6,
    validate(value) {
      if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        throw new CustomError(httpStatus.BAD_REQUEST, "Password must contain at least one letter and one number");
      }
    }
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
