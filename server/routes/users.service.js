// Packages
var express = require('express');
var router = express.Router();
var HttpStatus = require('http-status-codes');

// Your enpoints will be configured here
router.get('/', function (req, res) {
  res.status(HttpStatus.OK).send('Request received');
})

// Your endpoints will be configured here
router.get('/:user_id', function (req, res) {
  var user_id = req.params.user_id;
  res.status(HttpStatus.OK).send('Request received for ' + user_id)
})

// Makes these configurations available when imported
module.exports = router;