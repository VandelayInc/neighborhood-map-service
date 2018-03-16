const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream(`./json_csv/tenMillion.csv`);

let randomEntry = (id) => {
  let firstName = faker.name.firstName();
  let city = faker.address.city();
  let country = faker.address.country();
  let lat = faker.address.latitude();
  let lng = faker.address.longitude();
  let state = faker.address.stateAbbr();
  let zipcode = faker.address.zipCode();
  let neighborhoodOverview = faker.lorem.paragraph();
  let transit = faker.lorem.paragraph();
  return (`${id},"${firstName}","${city}","${country}",${lat},${lng},"${state}","${zipcode}","${neighborhoodOverview}","${transit}"`)
};

let writeTenMillion = (writer) => {
  let i = -1;
  let max = 1e7;
  let write = () => {
    let ok = true;
    do {
      i++;
      let entry = randomEntry(i);
      if (i===max) {
        writer.write(entry);
      } else if(i===0) {
        writer.write('id,first_name,city,country,lat,lng,state,zipcode,neighborhood_overview,transit\n');
      } else {
        ok = writer.write(entry + '\n');
      }
    } while (i < max && ok);
    if (i < max){
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillion(file);