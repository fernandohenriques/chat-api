const userActions = {
  get: (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
  },
};

module.exports = userActions;
