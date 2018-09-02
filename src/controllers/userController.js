const User = require('../models/User');

const printUserResult = (response, err, user, notFoundOption = false) => {
  if (err)
    response.status(422).send({ 'error': err.message });
  else
    if (notFoundOption && !user)
      response.status(404).send({ 'error': 'No user found.' });
    else
      response.status(200).send(user);
};

const userActions = {

  getAll: (req, res) => {
    res.status(200).send('Requisição recebida com sucesso!');
  },

  getOne: (req, res) => {
    User.findById(req.params.id, (err, user) => printUserResult(res, err, user));
  },

  post: (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => printUserResult(res, err, user));
  },

  put: (req, res) => {
    const user = { '_id': req.params.id };
    User.findByIdAndUpdate(user, req.body, { new: true }, (err, user) => printUserResult(res, err, user));
  },

  delete: (req, res) => {]

  },
};

module.exports = userActions;
