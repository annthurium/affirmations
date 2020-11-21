const express = require('express');
const getRandomAffirmation = require('./random_affirmation');

const app = express();

let PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const lang = req.query.lang;
  res.json({affirmation: getRandomAffirmation(lang)});
});

const server = app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));

module.exports = server;
