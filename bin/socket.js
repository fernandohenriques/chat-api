/* Middlewares */
const cors = require('../src/middlewares/socketCors');

const socket = (io) => {
  cors(io);

  io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('chatConnect', (id) => socket.broadcast.emit('someoneEnter', id));

    socket.on('chatDisconnect', (id) => socket.broadcast.emit('someoneOut', id));

    socket.on('addToRoom', (roomName) => socket.join(roomName));

    socket.on('removeFromRoom', (roomName) => socket.leave(roomName));

    socket.on('chatMessage', (message) => {
      const { id, user } = message;
      const roomName = [user.id, id].sort((a, b) => a > b).toString().replace(',','-');
      io.sockets.in(roomName).emit('chatReceiveMessage', message);
    });

  });

};

module.exports = socket;
