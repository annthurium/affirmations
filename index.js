const http = require('http');
const express = require('express');
const getRandomAffirmation = require('./affirmations');

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.get('/', (req, res) => {
  res.json({affirmation: getRandomAffirmation()});
});

http.createServer(app).listen(port, () => {
  console.log(`express server listening on port ${port}`);
});
