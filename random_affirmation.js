const affirmations = require('./affirmations')

const getRandomAffirmation = () => affirmations[Math.floor(Math.random() * affirmations.length)];
module.exports = getRandomAffirmation;
