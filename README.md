# funkie

Makes orchestration of automated functional/behavioural testing easier

Will handle the spinning up and tearing down of automation driver processes automatically so you can just `npm test`. Funkie allows you to choose from a number of compatible automation drivers and will handle their installation and the execution of their processes for you.

## Installation

Funkie can be installed globally for use from the command line, or locally for use as part of an `npm test` script.

## Usage:

First install the runtime of choice:

```shell
> npm install --save-dev funkie-phantom
```

Run a mocha test suite against a phantom driver:

```shell
> funkie --driver phantom mocha ./test
```

## Supported drivers

### PhantomJS

```
> npm install [--save-dev] funkie-phantom
> funkie --driver phantom [test command]
```

### Selenium

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
