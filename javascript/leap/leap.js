// Given a year, determine if it is a leap year or not

var isLeapYear = function() {};

isLeapYear.prototype.hello = function(year) {

// is year divisible by 4?

div4 = year % 4;

if (div4 > 0) {
  console.log("not a leap year!");
} else {




}

/*
on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400

*/

};

module.exports = isLeapYear;
