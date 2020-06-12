var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    res.redirect('https://www.rust-lang.org/');
});

module.exports = router;