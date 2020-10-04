// Packages
var express = require('express');
var router = express.Router();
var HttpStatus = require('http-status-codes');


router.param('user_id', function (req, res, next, user_id) {
  console.log('Performing validations on ' + user_id);

  // We can decode the input and update
  req.user_id = decodeURI(user_id).trim();

  console.log('validated ' + user_id);

  // Allow the request to continue
  next();
});

// Catch all
router.all('*', function (req, res, next) {
  console.log('Performing authorization');

  //Authorize and set value
  var authorized = true;

  if (authorized === false) {
    res.status(HttpStatus.UNAUTHORIZED).send(HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED));
  }
  next();
});


// Your enpoints will be configured here
router.get('/', function (req, res) {
  res.status(HttpStatus.OK).json([{ name: 'Luis Arce', points: 3200 }]);
})

// Your endpoints will be configured here
router.get('/:user_id', function (req, res) {
  var user_id = req.params.user_id;
  res.status(HttpStatus.OK).send('Request received for ' + user_id)
})

// Your endpoints will be configured here
router.delete('/', function (req, res) {
  var user_id = req.body.user_id;

  res.status(HttpStatus.ACCEPTED).send(user_id)
})

// Makes these configurations available when imported
module.exports = router;