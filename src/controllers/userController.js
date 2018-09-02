const User = require('../models/User');

const userActions = {

  get: (req, res) => {
    res.status(200).send('Requisição recebida com sucesso!');
  },

  post: (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
      if (err)
        res.status(422).send({ "error": err.message });
      else
        res.status(200).send(user);
    });
  },

};

module.exports = userActions;
