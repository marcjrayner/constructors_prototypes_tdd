const Paint = function (volume) {
  this.volume = volume
  this.isEmpty = false
};

Paint.prototype.empty = function () {
  this.isEmpty = true
};


module.exports = Paint;
