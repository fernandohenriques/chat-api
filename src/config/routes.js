const express = require('express');
const router = express.Router();

/* Controllers */
const userController = require('../controllers/userController');

/* Middlewares */
const jwtAuth = require('../middlewares/jwtAuth');

/* Routes */
router.get('/', (req, res) => {
  res.status(200).send({
    title: 'Chat API - Built with love on NodeJS.',
    version: '0.0.1',
  });
});

router.get('/users', jwtAuth, userController.getAll);
router.get('/users/:id', jwtAuth, userController.getOne);
router.put('/users/:id', jwtAuth, userController.put);
router.delete('/users/:id', jwtAuth, userController.delete);

router.post('/users', userController.post);
router.post('/login', userController.login);


module.exports = router;
