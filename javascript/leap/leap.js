var Year = function( year ) {
  this.year = year;
};

Year.prototype.isLeap = function isLeap() {
  /**
  * Every year that's evenly divisable by 4
  * Except every year is evenly divisable by 100
  * Unless! the year is also evenly divisable by
  */
  return ( ( this.year % 4 === 0 ) && ( this.year % 100 !== 0 ) ) || ( this.year % 400 === 0 );
}

module.exports = Year;
