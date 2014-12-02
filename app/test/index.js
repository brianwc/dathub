var test = require('tape')
var app = require('../index.js')
var page = require('page')

test('simple test', function (t) {
  console.log('testing')
  t.equal(true, true, 'equals')
  t.end()
})
