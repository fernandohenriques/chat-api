const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  const result = dotenv.config();
  if (result.error) throw result.error;
}

const app = require('../src/app');
const socket = require('./socket');
const port = process.env.PORT || '3000';

const http = require('http').Server(app);
const io = require('socket.io')(http);
socket(io);

http.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
