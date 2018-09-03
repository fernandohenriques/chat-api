const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/database');
const routes = require('./config/routes');
const cors = require('./middlewares/cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);
app.use('/', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
