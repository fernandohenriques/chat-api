const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');
const User = require('../models/User');
const userHelper = require('../helpers/userHelper');

const { printUserResult, loginResult, getFullName } = userHelper;

const userActions = {

  getAll: (req, res) => {
    User.find({}, (err, users) => printUserResult(res, err, users));
  },

  getOne: (req, res) => {
    User.findById(req.params.id, (err, user) => printUserResult(res, err, user));
  },

  post: (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => loginResult(res, err, user, jwt, secrets));
  },

  put: (req, res) => {
    const user = { '_id': req.params.id };
    User.findByIdAndUpdate(user, req.body, { new: true }, (err, user) => printUserResult(res, err, user, true));
  },

  delete: (req, res) => {
    const id = req.params.id;
    const message = (user) => JSON.stringify({'message': `User ${getFullName(user)} was deleted.`});
    User.findByIdAndRemove(id, (err, user) => printUserResult(res, err, message(user)));
  },

  login: (req, res) => {
    const user = req.body.user;
    User.findOne(user, (err, user) => loginResult(res, err, user, jwt, secrets));
  },

};

module.exports = userActions;
