const express = require('express');
const db = require('../db');
let app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/api/:roomid', (req, res) => {
  console.log('API: GET request for room ' + req.params.roomid);
  db.findOne(req.params.roomid, (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.json(data);
    }
  });
});

app.get('/:roomid', (req, res) => {
  console.log('Received GET request');
  res.status(200).end();
});


let PORT = process.env.PORT || 8080;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
