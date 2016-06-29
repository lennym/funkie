'use strict';

const wd = require('wd');

const assert = require('assert');

describe('test', () => {
  let browser;
  beforeEach(() => {
    browser = wd.remote('http://localhost:4444/wd/hub', 'promiseChain');
    return browser.init({ browserName: 'chrome' });
  });
  afterEach(() => {
    return browser.quit();
  });
  it('runs', () => {
    return browser.get('http://yld.io')
      .then(() => browser.title())
      .then(title => {
        assert.equal(title, 'Node.js Software Engineering — YLD');
      });
  });
});
