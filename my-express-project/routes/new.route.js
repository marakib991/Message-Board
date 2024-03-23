var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', (req, res, next) => {
  res.render('index',{});
});


module.exports = router;
