/* Events */
//const chatEvents = require('../events/chatEvents');

const socket = (io) => {

  io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('message', function(msg) {
      console.log('message: '+ msg);
    });
  });

};

module.exports = socket;
