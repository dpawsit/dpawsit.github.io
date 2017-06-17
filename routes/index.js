var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Daniel Osaki',
    tel: '(805) 404-3893',
    tel_full: 'tel:+18054043893',
    name: 'Daniel Osaki',
    city: 'Los Angeles',
    country: 'California',
    github: 'dpawsit',
    linkedin: 'danielosaki',
    email: 'osaki.daniel@gmail.com',
    email_full: 'mailto:osaki.daniel@gmail.com'
  });
});

module.exports = router;
