var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = router;
