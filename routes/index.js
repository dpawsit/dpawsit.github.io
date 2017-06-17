var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Daniel Osaki Resume',
    phoneNumber: 8054043893,
  });
});

module.exports = router;
