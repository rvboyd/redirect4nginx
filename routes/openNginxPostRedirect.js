var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("ENTER: openNginxPostRedirect.js");
  res.render('openNginxPostRedirect', { title: 'Basic Nginx Open Post Redirect Form File' });
});

module.exports = router;