var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    console.log("ENTER: nginxPostRedirect.js");
    res.redirect('https://fsharp.org/');
});

module.exports = router;