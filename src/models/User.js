const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  email: String,
  password: String,
  avatar: String,
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
