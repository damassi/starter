
// Suppress warnings in test environment
process.env.NODE_ENV = 'test';

require('babel-polyfill')
require('babel-register')()
