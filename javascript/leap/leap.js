var Util = require('../lib/util');
Util = new Util();

var Leap = function(year) {
    this.year = year;
};

Leap.prototype.isDivisibleByFour = function()
{
    return (this.year % 4) == 0;
};

Leap.prototype.isDivisibleByOneHundred = function()
{
    return (this.year % 100) == 0;
}

Leap.prototype.isDivisibleByFourHundred = function() 
{
    return (this.year % 400) == 0;
}

Leap.prototype.isLeap = function() {
   if(!this.isDivisibleByFour())
   {
   return false;
   }
   
   if(this.isDivisibleByOneHundred())
   {
     if(this.isDivisibleByFourHundred())
	 {
	     return true;
	 }
	 
	 return false;
   }
   
   return true;
};

module.exports = Leap;