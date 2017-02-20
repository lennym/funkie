const Promise = require('bluebird');
const driver = require('./driver');
const runner = require('./runner');
const constants = require('./constants');

const funkie = (options) => {
  return Promise.using(driver(options), () => {
    return runner(options);
  })
  .catch((err) => {
    if (err.message !== constants.NON_ZERO_EXIT_CODE) {
      console.error(err.message);
      console.error(err.stack);
    }
    process.exit(1);
  });
};

module.exports = funkie;
