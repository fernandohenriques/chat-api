/* Events */
//const chatEvents = require('../events/chatEvents');

/* Middlewares */
const cors = require('../middlewares/socketCors');

const socket = (io) => {
  cors(io);

  io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('message', function(msg) {
      console.log('message: '+ msg);
    });

    socket.on('chatConnect', (id) => {
      console.log('id:' + id);
    });
  });

};

module.exports = socket;
