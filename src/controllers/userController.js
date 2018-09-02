const User = require('../models/User');

const printResult = (response, err, user) => {
  if (err)
    response.status(422).send({ 'error': err.message });
  else
    response.status(200).send(user);
};

const userActions = {

  get: (req, res) => {
    res.status(200).send('Requisição recebida com sucesso!');
  },

  post: (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => printResult(res, err, user));
  },

  put: (req, res) => {
    const user = { '_id': req.params.id };
    User.findByIdAndUpdate(user, req.body, { new: true }, (err, user) => printResult(res, err, user));
  },
};

module.exports = userActions;
