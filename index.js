const http = require('http');
const express = require('express');
const getRandomAffirmation = require('./affirmations');

const app = express();

app.get('/', (req, res) => {
  res.json({affirmation: getRandomAffirmation()});
});

http.createServer(app).listen(3000, () => {
  console.log('express server listening on port 3000');
});
