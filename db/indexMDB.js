const mongoose = require('mongoose');

let remoteUser = 'remote';
let remotePwd = 'remote';
let remoteServer = '54.183.216.99';

const dbURI = `mongodb://localhost:27017/VandelayInc`;
// const dbURI = `mongodb://${remoteUser}:${remotePwd}@${remoteServer}:27017/VandelayInc`;
const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

mongoose.connect(dbURI, options);

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
  Neighborhood.findOne().where('_id').equals(id).exec(callback);
}
function close() {
  mongoose.close();
}
exports.insertOne = insertOne;
exports.insertMany = insertMany;
exports.findOne = findOne;
exports.close = close;