let mongoose = require('mongoose');
let dbURI = 'mongodb://localhost/hacknb';
mongoose.connect(dbURI);

let roomSchema = mongoose.Schema({
  listing: {
    id: Number,
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

let Room = mongoose.model('Room', roomSchema);

function insertOne(room, callback) {
  Room.create(room, callback);
}
function findOne(id, callback) {
  Room.findOne().where('listing.id').equals(id).exec(callback);
}
function close() {
  mongoose.close();
}

exports.insertOne = insertOne;
exports.findOne = findOne;
exports.close = close;