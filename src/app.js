const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./config/routes');
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

app.use('/', routes);

module.exports = app;
