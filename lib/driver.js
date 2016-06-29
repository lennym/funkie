'use strict';

const Promise = require('bluebird');

const getDriver = (options) => {
  return Promise.resolve()
    .then(() => {
      if (!options.driver) {
        options.driver = 'phantom';
        console.warn('No driver specified - defaulting to "phantom"');
      }
      let driver;
      if (!options.driver.match(/^\.\//)) {
        try {
          driver = require('funkie-' + options.driver);
        } catch (e) {
          throw new Error(`Driver "${options.driver}" is not installed - try \`npm install --save-dev funkie-${options.driver}\``);
        }
      } else {
        driver = require(options.driver);
      }
      return driver();
    });
};

const driver = (options) => {
  return getDriver(options)
    .then((runner) => {
      return Promise.resolve()
        .then(() => runner.start())
        .disposer(() => runner.stop());
    });
};

module.exports = driver;
