const R = require('ramda');

const printUserResult = (response, err, json, notFoundOption = false) => {
  const statusError = notFoundOption ? 404 : 422;
  const statusSuccess = json ? 200 : 204;

  if (err)
    response.status(statusError).send({ 'error': err.message });
  else
    response.status(statusSuccess).send(json);
};

const loginResult = (response, err, user, jwt, secrets) => {
  if (err || !user)
    response.status(401).send({ 'error': 'Wrong credentials!' });
  else {
    const showUser = ['firstName','secondName','email','avatar'];
    const token = jwt.sign({ 'userId': user._id }, secrets.jwt_key, { expiresIn: '2 days' });
    response.status(200).send({ 'token': token, 'user': R.pick(showUser, user) });
  }
}

const getFullName = (user) => `${user.firstName} ${user.secondName}`;

module.exports = { printUserResult, loginResult, getFullName };
