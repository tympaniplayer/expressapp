var express = require('express'),
    router = express.Router(),
    db = require('../CattleTrack/database');

/* GET api */
router.get('/test', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({test: "test"}));
});

router.get('/connect', function(req, res, next){
  res.setHeader('Content-Type', 'application/json');

  db.connect();

  res.status(200).send(JSON.stringify({success: true}));
})

module.exports = router;
