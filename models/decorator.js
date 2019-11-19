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

Decorator.prototype.checkEnoughPaint = function (room) {
  if (this.totalPaintVolume() >= room.area) {
    return true
  } else {
    return false
  };
};

Decorator.prototype.paintRoom = function (room) {
  if (this.checkEnoughPaint(room)) {
    room.paintRoom()
  } else {
    return 'Not Enough Paint'
  };
};

module.exports = Decorator;
