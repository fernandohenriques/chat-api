const express = require('express');
const app = express();

const routes = require('./config/routes');
app.use('/', routes);

module.exports = app;
