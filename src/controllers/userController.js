const userActions = {
  get: (req, res) => {
    res.status(200).send('Requisição recebida com sucesso!');
  },
};

module.exports = userActions;
