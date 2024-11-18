const firstNames = require('../dictionary/firstNames.json').data;
const lastNames = require('../dictionary/lastNames.json').data;
const emailDomains = require('../dictionary/emailDomains.json').data;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const generateRandomFirstName = () => {
  return firstNames[getRandomInt(firstNames.length)];
};

const generateRandomLastName = () => {
  return lastNames[getRandomInt(lastNames.length)];
};

const generateRandomEmailDomain = () => {
  return emailDomains[getRandomInt(emailDomains.length)];
};

module.exports = {
  generateRandomFirstName,
  generateRandomLastName,
  generateRandomEmailDomain,
};
