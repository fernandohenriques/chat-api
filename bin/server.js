const http = require('http');
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  const result = dotenv.config();
  if (result.error) throw result.error;
}

const app = require('../src/app');
const port = process.env.PORT || '3000';

const socket = require('./socket');
const socket_port = process.env.SOCKET_PORT || '4555';
const server = http.createServer(app).listen(socket_port);
const io = require('socket.io').listen(server);
socket(io);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
