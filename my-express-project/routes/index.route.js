var express = require('express');
var router = express.Router();
var messages = require("../models/message.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.post('/new',(req, res, next) => {
  try{const authorName = req.body.authorName;
  const message = req.body.message;
  messages.push({text: message, user: authorName, added: new Date()});
  res.redirect('/')}
  catch(err){
    res.status(500).json({ messages: err.message})
  }
})


module.exports = router;
