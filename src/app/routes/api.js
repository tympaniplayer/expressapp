var express = require('express');
var router = express.Router();

/* GET api */
router.get('/test', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({test: "test"}));
});

module.exports = router;
