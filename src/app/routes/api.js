var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Cattle = mongoose.model('Cattle');
/* GET api */
router.get('/test', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({test: "test"}));
});

router.get('/connect', function(req, res, next){
  res.setHeader('Content-Type', 'application/json');


  res.status(200).json(Cattle.schema);
})

router.post('/add', function(req, res, next){
  res.status(200).json(req.body);
});

module.exports = router;
