'use strict';

const cp = require('child_process');
const Promise = require('bluebird');

const runner = (options) => {
  return new Promise((resolve, reject) => {
    const cmd = options._.shift();
    const child = cp.spawn(cmd, options._, { stdio: 'inherit' });
    child.on('exit', (code) => {
      code ? reject(new Error('')) : resolve();
    });
  });
};

module.exports = runner;
