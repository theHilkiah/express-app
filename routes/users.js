var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/', function (req, res, next) {
  res.render('users/index', {
    title: 'Express Users'
  });
});

router.get('/login', function (req, res, next) {
  res.render('users/login', {
    title: 'Express Login'

  });
});

router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;