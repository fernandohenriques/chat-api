const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chat', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

module.exports = mongoose.connection;