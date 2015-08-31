var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


cattleSchema = Schema({
  name: String,
  tag: String,
  dateOfBirth: Date,
  sex: String,
  records:[{body: String, date: Date}],
  partOfHerd : Boolean,
  calvings: Number,
  location: {
    street: String,
    city: String,
    state: String,
    zip: String,
    latitude: Number,
    longitude: Number
  },

});

cattleSchema.path('name').validate(function(name){
  return name.length;
}, 'Name cannot be blank');

cattleSchema.methods = {

};

mongoose.model('Cattle', cattleSchema);
