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

    return true;
};

Util.prototype.isEmptyOrWhiteSpace = function(str)
{
   if(str === "" || str === " ")
   {
   	return true;
   }

   return false;
};

Util.prototype.isNumber = function(num) {

    if(isNaN(num))
    {
        return false;
    }

    if (typeof(num) !== "number")
    {
        return false;
    }

    return true;
};

Util.prototype.isPositiveNumber = function(num)
{
  return num >= 0;
};

module.exports = Util;