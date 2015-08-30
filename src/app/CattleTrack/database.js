var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    ObjectId = require('mongodb').ObjectID,
    url = 'mongodb://localhost:27017/cattletrack';


function connect(callback){
  MongoClient.connect(url, function(err, database){
    if(!err){
      console.log("Connecting via connect");
      db = database;
      callback();
    }
  });
}

function addCattle(cattle){
    connect(function(){
      db.close();
    });
}

function getCattle(){
    connect(function(){
      db.close();
    });

}

module.exports = {
  addCattle: addCattle
};
