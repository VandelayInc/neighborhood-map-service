const express = require('express');
const db = require('../db');

const app = express();
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/', (req, res) => {
  console.log('Received GET request');
  res.status(200).end();
});

app.get('/api/:roomid', (req, res) => {
  console.log(`API: GET request for room ${req.params.roomid}`);
  db.findOne(req.params.roomid, (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.json(data);
    }
  });
});

module.exports = app;
