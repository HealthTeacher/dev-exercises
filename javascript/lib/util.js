var Util = function() {};

Util.prototype.isSomething = function(obj)
{
  if(obj === null)
   {
   	 return false;
   }
   
   if(typeof(obj) === "undefined")
   {
   	return false;
   }
};

Util.prototype.isNullOrWhiteSpace = function(str)
{

   if(typeof(str) !== "string")
   {
   }

   if(str === "" || str === " ")
   {
   	return true;
   }

   return false;
};

Util.prototype.isNumber = function(num)
{
  if(num === null)
  {
    return false;
  }

  if(typeof(num) === "undefined")
  {
  	return false;
  }

  if(typeof(num) !== number)
  {
  	return false;
  }
};

Util.prototype.isPositiveNumber(num)
{
  if(this.isNumber(num) && num >= 0)
  {
  	return true;
  }

  return false;
}


module.exports = Util;