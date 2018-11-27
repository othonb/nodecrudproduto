/*
 Modulo com recursos especificos do servidor
*/

var express = require ('express');

var cors = require('cors')

var app = express ();

app.use(cors())

var bodyParser = require('body-parser')

app.use( bodyParser.json() );

app.use (express.static ('public'));

module.exports = app;
