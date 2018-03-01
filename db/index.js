let mongoose = require('mongoose');
let dbURI = 'mongodb://localhost/hackbnb';
mongoose.connect(dbURI);

let neighborhoodSchema = mongoose.Schema({
  listing: {
    id: {type: Number, unique: true},
    primary_host: {first_name: String},
    city: String,
    state: String,
    zipcode: String,
    country: String,
    neighborhood_overview: String,
    transit: String,
    lat: Number,
    lng: Number
  }
});

let Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);

function insertOne(room, callback) {
  Neighborhood.create(room, callback);
}
function findOne(id, callback) {
  Neighborhood.findOne().where('listing.id').equals(id).exec(callback);
}
function close() {
  mongoose.close();
}

exports.insertOne = insertOne;
exports.findOne = findOne;
exports.close = close;
