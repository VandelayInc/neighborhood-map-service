const express = require('express');
const db = require('../db');

const app = express();
app.use('/rooms/:roomid/neighborhood', express.static(`${__dirname}/../client/dist`));
app.use('/', express.static(`${__dirname}/../client/dist`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/neighborhood/:roomid', (req, res) => {
  db.findOne(req.params.roomid, (err, data) => {
    if (err || data === null) {
      res.status(500).end();
    } else {
      res.json(data);
    }
  });
});

module.exports = app;
