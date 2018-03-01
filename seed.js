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
        console.error(err);
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
    console.error(err);
  }
  listings = JSON.parse(JSON.parse(data));
  Neighborhood.insertMany(listings, (error) => {
    if (error) {
      console.error('Could not seed DB');
    } else {
      console.log('Seeded DB.');
      mongoose.connection.close((closeErr) => {
        if (closeErr) {
          console.error('Could not close DB connection');
        } else {
          process.exit(0);
        }
      });
    }
  });

  // for (let i = 0; i < listings.length; i++) {
  //   Neighborhood.insertOne(listings[i], callback);
  // }
});
