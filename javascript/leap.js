function Year(year) {
  var that = this;

  that.year = year;

  return {
    isLeap: function() {
      return that.year % 4 === 0
        && (that.year % 100 !== 0 || that.year % 400 === 0);
    }
  }
}

module.exports = Year;
