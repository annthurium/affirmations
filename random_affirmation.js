const {
  affirmations, 
  affirmations_ptBr,
} = require('./affirmations')

const getRandomAffirmation = (lang='en-us') => {
  let affimationsList = [];

  // If the lang is set to pt-br then use the Brazillian affirmations list
  // the default lang is en-us
  if (lang==='pt-br')
    affimationsList = affirmations_ptBr; 
  else 
    affimationsList = affirmations; 
  
  return affimationsList[Math.floor(Math.random() * affimationsList.length)];
};

module.exports = getRandomAffirmation;
