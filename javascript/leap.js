/*
  Tests call for a basic js object with an `isLeap` function
  3 conditions required:
  - must be evenly divisible by 4 (modulo to the rescue)
  - return false if any results that pass the first condition are evenly divisible by 100
  - but return true if any results from the second condition are evenly divisible by 400
 */
module.exports = function(year) {
  this.year = year
  this.isLeap = function() {
    return this.year % 4 === 0 && (this.year % 100 !== 0 || this.year % 400 === 0);
  }
};