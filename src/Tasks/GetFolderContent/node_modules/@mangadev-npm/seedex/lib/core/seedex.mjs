import firstNames from '../dictionary/firstNames.json' assert { type: 'json' };
import lastNames from '../dictionary/lastNames.json' assert { type: 'json' };
import emailDomains from '../dictionary/emailDomains.json' assert { type: 'json' };

const getRandomInt = (max) => Math.floor(Math.random() * max);

export const generateRandomFirstName = () => {
  return firstNames.data[getRandomInt(firstNames.data.length)];
};

export const generateRandomLastName = () => {
  return lastNames.data[getRandomInt(lastNames.data.length)];
};

export const generateRandomEmailDomain = () => {
  return emailDomains.data[getRandomInt(emailDomains.data.length)];
};
