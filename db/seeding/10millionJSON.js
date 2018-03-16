const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream(`./json_csv/tenMillion.json`);

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
  return JSON.stringify(entry);
};

let writeTenMillion = (writer) => {
  let i = 1e7;
  let write = () => {
    let ok = true;
    do {
      let entry = randomEntry(i);
      i--;
      if (i===0) {
        writer.write(entry);
      } else {
        ok = writer.write(entry + '\n');
      }
    } while (i > 0 && ok);
    if (i > 0){
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillion(file);
