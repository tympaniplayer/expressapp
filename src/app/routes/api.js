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

router.get('/remove/:id', function(req, res, next){
  Cattle.findById(req.params.id, function(err, cattle){
    if(err){
      res.status(500).json(err);
    }
    cattle.remove(function(err){
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).end();
      }
    });
  });
});


router.put('/update/:id', function(req, res, next){
  Cattle.findById(req.params.Id, function(err, cattle){
    if(err){
      res.status(500).json(err);
    }
    else{
      cattle.update(req.body, function(err){
        if(err){
          res.status(500).json(err);
        }
        res.status(200).end();
      });
    }
  })
});

router.get('/find/:name', function(req, res, next){
  Cattle.find({name: req.params.name}, function(err, cattle){
    if(err){
      res.status(500).json(err);
    }
    if(!cattle.length){
      res.status(404).send("Cattle not found");
    }
    else{
      res.status(200).json(cattle);
    }
  });
});

router.post('/add', function(req, res, next){
  var cattle = new Cattle(req.body);
  cattle.save(function(err){
    if(err){
      res.status(500).json(err);
    }
    else{
      res.status(201).json(cattle);
    }
  });
});


module.exports = router;
