var express = require('express');
var app = express();
var router = express.Router();

// Require the module for our endpoint
var users = require('./routes/users.service');

// Set up the users web service endpoint
app.user('./users', users);

// Set the server port value
app.set('port', 1776);

// Start listening on the configured port
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
})