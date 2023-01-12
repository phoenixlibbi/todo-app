const express = require('express');
const app = express();
const routes = require('./route');
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.json());

app.use('/todo',routes);

module.exports=app;