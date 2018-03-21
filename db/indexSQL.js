const mysql = require('mysql2');
const Sequelize = require('sequelize');

let remoteUser = 'remote';
let remotePwd = 'remote';
let remoteServer = '54.215.129.140';

const sequelize = new Sequelize('VandelayInc', remoteUser, remotePwd, {
  host: remoteServer,
  dialect: 'mysql',
  pool:{
    max: 5, //max number of connections
    min: 0, //min number of connections
    idle: 10000 //idle time before connection closes
  },
  operatorsAliases: false,
  logging: false
});

sequelize //Console logs connection status
  .authenticate()
  .then(() => {
    console.log('Connection Established!');
  })
  .catch((err) => {
    console.error('Connection Error:', err);
  });

let findOne = (id, callback) => {
  sequelize.query(`SELECT * FROM neighborhoods WHERE id = ${id};`)
    .then((results) => {
      let entry = { //Format MySQL to match MongoDB response
        listing: { 
          primary_host: { first_name: results[0][0].first_name },
           city: results[0][0].city,
           country: results[0][0].country,
           lat: Number(results[0][0].lat),
           lng: Number(results[0][0].lng),
           state: results[0][0].state,
           zipcode: results[0][0].zipcode,
           neighborhood_overview: results[0][0].neighborhood_overview,
           transit: results[0][0].transit
        },
        _id: results[0][0].id }
        callback(null, entry)
    });
}
 
exports.findOne = findOne;