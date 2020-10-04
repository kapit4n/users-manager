var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

// Require the module for our endpoint
var users = require('./routes/users.service');

// Set up the users web service endpoint
app.use('/users', users);

// Set the server port value
app.set('port', 3001);

// Start listening on the configured port
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
})