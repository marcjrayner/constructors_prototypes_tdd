const Decorator = function () {
  this.paintStock = []
};

Decorator.prototype.addPaint = function (paint) {
  this.paintStock.push(paint);
};

Decorator.prototype.totalPaintVolume = function () {
  let total = 0
  for (var paint of this.paintStock) {
    total += paint.volume
  }
  return total
};

module.exports = Decorator;
