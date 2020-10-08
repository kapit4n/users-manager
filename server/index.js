var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

app.use(cors());

var users = require('./routes/users.service');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/users', users);
app.set('port', 3001);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
})

const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.log("Error opening db");
  } else {
    /* db.run(`create table users(
      id INTEGER primary key autoincrement not null, 
      name nvarchar(50) not null)`, (err) => {
      if (err) {
        console.log("Table already exists");
      }
      let insert = 'insert users (name) values (?)';
      db.run(insert, ["Luis Arce"]);
      db.run(insert, ["Juan Arce"]);
    }); */
  }
});

app.db = db;
