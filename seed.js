let Room = require('./db');
var fs = require('fs');
console.log('\nSTART\n');

let listings;

fs.readFile('listings.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  listings = JSON.parse(JSON.parse(data));
  for (let i = 0; i < listings.length; i++) {
    Room.insertOne(listings[i]);
  }
});
