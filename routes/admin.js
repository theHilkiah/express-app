var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  let DB = req.app.get('DB');

  res.render('admin/index', {
    title: 'Wxpress Admin',
    users: DB.query('SELECT * FROM users', function (err, rows, fields) {
      if (err) throw err;
      return rows;
    })
  });
  
});

module.exports = router;