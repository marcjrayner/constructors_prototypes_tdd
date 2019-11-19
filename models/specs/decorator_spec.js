const assert = require('assert');
const Decorator = require('../decorator.js')

describe ('Decorator', function () {
  let decorator
  beforeEach(function() {
    decorator = new Decorator()
  });

  it('should start with empty paint stock', function () {
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [])
  })
})
