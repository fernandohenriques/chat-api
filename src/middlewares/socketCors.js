const allowedOrigins = ['http://localhost:3000', 'https://henriques-chat.herokuapp.com'];

const checkCors = (io) => {
  io.origins((origin, callback) => {
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback('Origin not allowed!', false);
    }
    callback(null, true);
  });
};

module.exports = checkCors;
