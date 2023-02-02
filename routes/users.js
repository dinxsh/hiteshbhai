var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var db=require('../database');

const app = express()

app.use(express.json());
app.use(express.urlencoded()); 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/data', function (req, res, next) {
  db.query('SELECT * FROM users', function (err, rows) {
    if (err) {
      console.log(err);
      req.flash('error', err)
      res.render('index', { data: '' })
    } else {
      res.render('data', { data: rows })
    }
  })
})

router.post('/create', urlencodedParser, function(req, res) {
  const {fullName, emailAddress, city, country} = req.body;
  console.log(fullName, emailAddress, city,country)
  var sql = 'INSERT INTO data (fullName, emailAddress, city, country) VALUES ("' + fullName  + '", "' + emailAddress + '", "' + city + '", "' + country + '");';
  db.query("use test;",function (err, data) { 
    if (err) throw err;
       console.log("User data is inserted successfully "); 
  });
  db.query(sql,function (err, data) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
  });
  db.commit()
 res.redirect('/');
});

module.exports = router;