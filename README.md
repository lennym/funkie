# funkie

Makes orchestration of automated functional/behavioural testing easier.

Will handle the spinning up and tearing down of automation driver processes automatically so you can just `npm test`. Funkie allows you to choose from a number of compatible automation drivers and will handle their installation and the execution of their processes for you.

## Why funkie?

Most automation frameworks require a user to handle starting/stopping a webdriver/selenium instance independently from the test runner. Funkie makes it easy to do single-command automated test runs, which are fully encapsulated and clean up after themselves.

## Installation

Funkie can be installed globally for use from the command line, or locally for use as part of an `npm test` script.

## Usage:

First install the driver of choice:

```shell
> npm install --save-dev funkie-phantom
```

Run a mocha test suite against a phantom driver:

```shell
> funkie --driver phantom mocha ./test
```

## Examples:

* [Using funkie with protractor](./examples/protractor)
* [Using funkie with wd](./examples/wd)

## Supported drivers

### [PhantomJS](github.com/lennym/funkie-phantom)

```
> npm install [--save-dev] funkie-phantom
> funkie --driver phantom [test command]
```

### [Selenium](github.com/lennym/funkie-selenium)

```
> npm install [--save-dev] funkie-selenium
> funkie --driver selenium [test command]
```

### Your favourite automation driver..?

Funkie drivers are as simple as:

```javascript
module.exports = () => {
  return {
    start: () => {},
    stop: () => {}
  }
}
```

If the `start` and `stop` methods are required to be asynchronous then they should return a promise.

You can pass a local driver with the driver option by passing a relative path:

```
> funkie --driver ./my/local/driver/module [test command]
```
