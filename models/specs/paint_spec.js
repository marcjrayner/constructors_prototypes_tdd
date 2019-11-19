const assert = require('assert');
const Paint = require('../paint.js')

describe('paint', function () {
  let paint
  beforeEach(function () {
    paint = new Paint(5);
  });

  it('should have a volume', function () {
    const actual = paint.volume;
    assert.strictEqual(actual, 5)
  });

  it('should be able to check empty', function () {
    const actual = paint.isEmpty
    assert.strictEqual(actual, false)
  });

  it('should be able to empty self', function () {
    paint.empty()
    const actual = paint.isEmpty
    assert.strictEqual(actual, true)
  })
});
