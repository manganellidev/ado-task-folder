const seedex = require('./index.js');

jest.retryTimes(3, { logErrorsBeforeRetry: true });

describe('index', () => {
  it('should generate a random first name', () => {
    const randomFirstName = seedex.generateRandomFirstName();

    expect(typeof randomFirstName).toBe('string');
    expect(randomFirstName).not.toEqual(seedex.generateRandomFirstName());
  });

  it('should generate a random last name', () => {
    const randomLastName = seedex.generateRandomLastName();

    expect(typeof randomLastName).toBe('string');
    expect(randomLastName).not.toEqual(seedex.generateRandomLastName());
  });

  it('should generate a random email domain', () => {
    const randomEmailDomain = seedex.generateRandomEmailDomain();

    expect(typeof randomEmailDomain).toBe('string');
    expect(randomEmailDomain).not.toEqual(seedex.generateRandomEmailDomain());
  });
});
