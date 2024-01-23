const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const RegisterModel = mongoose.model('Register', registerSchema);

module.exports = RegisterModel;
