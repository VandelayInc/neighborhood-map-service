const db = require('../index.js');
const faker = require('faker');
const fs = require('fs');
let randomEntry = (id) => {
  let entry = {
    _id: id,
    listing: {
      primary_host: {
        first_name: faker.name.firstName()
      },
      city: faker.address.city(),
      country: faker.address.country(),
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode(),
      neighborhood_overview: faker.lorem.paragraph(),
      transit: faker.lorem.paragraph()
    }
  }
  return entry;
};

let seedDatabase = (i) => {
  if(i<=1e3) {
    let tenThousandEntries = [];
    for (let j = 1; j<=1e4; j++){
      let id = ((i*1e4)+j);
      tenThousandEntries.push(randomEntry(id));
    }
    db.insertMany(tenThousandEntries, (err, docs)=>{
      if(err){
        console.log(err);
      } else {
        console.log(j);
        seedDatabase(i+1);
      }
    });
  }
}

seedDatabase(1);