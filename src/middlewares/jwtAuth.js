const R = require('ramda');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const getBearerToken = (token) => token ? R.slice(7, Infinity, token) : null;

const printForbiddenResult = (response) => response.status(403).send({ 'error': 'Access forbidden.' });

const jwtAuth = (req, res, next) => {
  const token = getBearerToken(req.headers.authorization);

  if (token)
    jwt.verify(token, secrets.jwt_key, (err, decoded) => {
      if (err)
        printForbiddenResult(res);
      req.decoded = decoded;
      next();
    });
  else
    printForbiddenResult(res);
};

module.exports = jwtAuth;
