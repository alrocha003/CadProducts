var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var products = require('./routes/products');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/v1/products', products);

mongoose.connect("mongodb://grupoaula:grupoaula123@ds133865.mlab.com:33865/api_aula",
    { useNewUrlParser: true});

module.exports = app;
