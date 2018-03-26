// const newrelic = require('newrelic');
const express = require('express');
const redis = require('redis');
const db = require('../db/indexMDB.js'); //Uncomment this to use MongoDB
// const db = require('../db/indexSQL.js'); //Uncomment this to use MySQL
const app = express();
const client = redis.createClient();

// app.locals.newrelic = newrelic;

app.use('/rooms/:roomid/neighborhood', express.static(`${__dirname}/../client/dist`));
app.use('/', express.static(`${__dirname}/../client/dist`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/neighborhood/:roomid', (req, res) => {
  let id = req.params.roomid;
  client.get(id, (error, data) => {
    if (data) {
      res.send(data);
    }
    else {
      db.findOne(id, (err, data) => {
        if (err || data === null) {
          res.status(500).end();
        } else {
          client.setex(id, 120, JSON.stringify(data));
          res.json(data);
        }
      });
    }
  })
});

module.exports = app;