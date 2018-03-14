const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/VandelayInc';
mongoose.connect(dbURI);

const neighborhoodSchema = mongoose.Schema({
  _id: Number,
  listing: {
    primary_host: { first_name: String },
    city: String,
    state: String,
    zipcode: String,
    country: String,
    neighborhood_overview: String,
    transit: String,
    lat: Number,
    lng: Number,
  }
});

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);

function insertMany(array, callback) {
  Neighborhood.insertMany(array, callback);
}
function insertOne(room, callback) {
  Neighborhood.create(room, callback);
}
function findOne(id, callback) {
  console.log(id)
  Neighborhood.findOne().where('_id').equals(id).exec(callback);
}
function close() {
  mongoose.close();
}
exports.insertOne = insertOne;
exports.insertMany = insertMany;
exports.findOne = findOne;
exports.close = close;
