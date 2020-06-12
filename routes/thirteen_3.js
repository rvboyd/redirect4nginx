var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("ENTER: thirteen_3.js");
  res.render('thirteen_4', { title: 'thirteen_3: Basic Nginx Open Post Redirect Form File' });
});

module.exports = router;