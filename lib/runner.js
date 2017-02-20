'use strict';

const cp = require('child_process');
const Promise = require('bluebird');

const constants = require('./constants');

const runner = (options) => {
  return new Promise((resolve, reject) => {
    const cmd = options._.shift();
    const child = cp.spawn(cmd, options._, { stdio: 'inherit' });
    child.on('exit', (code) => {
      code ? reject(new Error(constants.NON_ZERO_EXIT_CODE)) : resolve();
    });
  });
};

module.exports = runner;
