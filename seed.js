const mongoose = require('mongoose');
const fs = require('fs');
const Neighborhood = require('./db');

const dbURI = 'mongodb://localhost/hackbnb';
mongoose.connect(dbURI, (err, db) => {
  if (err) {
    console.error(err);
  } else {
    db.dropDatabase((error) => {
      if (error) {
        throw error;
      } else {
        console.log('Database \'hackbnb\' dropped.');
      }
    });
  }
});

console.log('\nSTART\n');

let listings;

fs.readFile('listings.json', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  listings = JSON.parse(JSON.parse(data));
  Neighborhood.insertMany(listings, (error) => {
    if (error) {
      throw err;
    } else {
      console.log('Seeded DB.');
      mongoose.connection.close((closeErr) => {
        if (closeErr) {
          throw err;
        } else {
          process.exit(0);
        }
      });
    }
  });
});
