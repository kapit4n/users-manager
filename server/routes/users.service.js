var express = require('express');
var router = express.Router();
var HttpStatus = require('http-status-codes');

router.param('user_id', function (req, res, next, user_id) {
  console.log('Performing validations on ' + user_id);

  req.user_id = decodeURI(user_id).trim();

  console.log('validated ' + user_id);

  next();
});

router.all('*', function (req, res, next) {
  console.log('Performing authorization');

  var authorized = true;

  if (authorized === false) {
    res.status(HttpStatus.UNAUTHORIZED).send(HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED));
  }
  next();
});


// get all users
router.get('/', function (req, res) {
  console.log(req.app.db);
  let db = req.app.db;
  db.all("select * from users", [], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
    }
    res.status(200).json({ rows })
  })
})

// get user by id
router.get('/:user_id', function (req, res) {
  let db = req.app.db;
  var user_id = req.params.user_id;
  db.all("select * from users where id = ?", [user_id], (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
    }
    res.status(200).json({ row })
  })
})

// Create new user
router.post('/', function (req, res) {

  let db = req.app.db;
  var body = req.body.name;
  let insert = 'insert into users (name) values (?)';
  db.run(insert, [req.body.name]);

  res.send(body)
})

// Your endpoints will be configured here
router.delete('/', function (req, res) {
  var user_id = req.body.user_id;
  
  res.status(HttpStatus.ACCEPTED).send(user_id)
})

// Makes these configurations available when imported
module.exports = router;