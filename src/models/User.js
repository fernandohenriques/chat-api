const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  email: { type: String, unique: true },
  password: String,
  avatar: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

UserSchema.pre('save', (next) => {
  const now = new Date();
  this.updated_at = now;
  if(!this.created_at) this.created_at = now;
  next();
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
