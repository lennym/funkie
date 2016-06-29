const Promise = require('bluebird');
const driver = require('./driver');
const runner = require('./runner');

const funkie = (options) => {
  return Promise.using(driver(options), () => {
    return runner(options);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
};

module.exports = funkie;
