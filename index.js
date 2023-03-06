const cors = require('cors');
const express = require('express');
const getRandomAffirmation = require('./random_affirmation');

const app = express();

let PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({affirmation: getRandomAffirmation()});
});

const server = app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));

module.exports = server;
