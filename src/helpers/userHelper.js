const printUserResult = (response, err, json, notFoundOption = false) => {
  const statusError = notFoundOption ? 404 : 422;
  const statusSuccess = json ? 200 : 204;

  if (err)
    response.status(statusError).send({ 'error': err.message });
  else
    response.status(statusSuccess).send(json);
};

const getFullName = (user) => `${user.firstName} ${user.secondName}`;

module.exports = { printUserResult, getFullName };
