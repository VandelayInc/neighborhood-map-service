const faker = require('faker');
const fs = require('fs');


let writeJSON = (iterator) => {
  if(iterator < 10) {
    let file = fs.createWriteStream(`./${iterator+1}million.json`);
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

    for(let i=((iterator * 1e6) + 1); i<=((iterator + 1) * 1e6); i++) {
      if(i === ((iterator * 1e6) + 1)) {
        file.write('[' + randomEntry(i) + ',\n');
      } else if(i === ((iterator + 1) * 1e6)){
        file.write(randomEntry(i) + ']');
      } else {
        file.write(randomEntry(i) + ',\n');
      }
    }

    file.end(()=>{
      writeJSON(iterator+1);
    });
  }
};

writeJSON(0);