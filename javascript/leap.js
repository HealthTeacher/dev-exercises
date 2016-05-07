function Year(year) {
  this.year = year;
  this.isLeap = function() {
    var _year = this.year;
    return _year % 4 === 0 && _year % 100 !=0 || _year % 400 === 0;
  }
};

module.exports = Year;
