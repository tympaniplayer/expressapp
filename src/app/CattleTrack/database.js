var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    url = 'mongodb://localhost:27017/cattletrack';

function connect(){
  MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    console.log("Connected to server");
    db.close();
  });
}
module.exports = {
  connect: connect
};
