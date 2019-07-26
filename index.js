const http = require('http');
const express = require('express');

const app = express();

const affirmation = 'you\'ll figure it out';

app.get('/', (req, res) => {
  res.json({affirmation});
});

http.createServer(app).listen(3000, () => {
  console.log('express server listening on port 3000');
});
