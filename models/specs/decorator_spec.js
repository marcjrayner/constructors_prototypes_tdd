const assert = require('assert');
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe ('Decorator', function () {
  let decorator
  let paint1
  let paint2
  let room
  beforeEach(function() {
    decorator = new Decorator();
    paint1 = new Paint(5);
    paint2 = new Paint(10)
    room1 = new Room(6)
  });

  it('should start with empty paint stock', function () {
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a paint to paintStock', function() {
    decorator.addPaint(paint1)
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [paint1])
  });

  it('should be able to count total volume of paint in stock', function() {
    decorator.addPaint(paint1)
    decorator.addPaint(paint2)
    const actual = decorator.totalPaintVolume();
    assert.deepStrictEqual(actual, 15)
  });

  it('should be able to calculate if enough paint to paint a room True', function() {
    decorator.addPaint(paint2)
    const actual = decorator.checkEnoughPaint(room1)
    assert.strictEqual(actual, true)
  })
  it('should be able to calculate if enough paint to paint a room False', function() {
    decorator.addPaint(paint1)
    const actual = decorator.checkEnoughPaint(room1)
    assert.strictEqual(actual, false)
  })

});
