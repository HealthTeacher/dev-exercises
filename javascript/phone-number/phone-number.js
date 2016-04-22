var Util = require('../lib/util');
Util = new Util();

var PhoneNumber = function(phoneNumber) {
    
    if(Util.isNullOrWhiteSpace(phoneNumber))
    {
      this.phoneNumber = "0000000000";
      return;
    };

    this.phoneNumber = this.cleanNumber(phoneNumber);
    this.phoneNumber = this.stripLeadingOne(this.phoneNumber);
};

PhoneNumber.prototype.cleanNumber = function(str)
{
    return str.replace(/[^\d]/gm, "");
};

PhoneNumber.prototype.areaCode = function()
{
  if(this.phoneNumber.length == 10)
  {
    return this.phoneNumber.substring(0,3);
  }

};

PhoneNumber.prototype.toString = function()
{
   var areaCode;
   var firstThreeDigits;
   var lastFourDigits;

   if(this.phoneNumber.length == 10)
   {
      areaCode = this.phoneNumber.substring(0, 3);
      firstThreeDigits = this.phoneNumber.substring(3,6);
      lastFourDigits = this.phoneNumber.substring(6,10);
      return "(" + areaCode + ")" + " " + firstThreeDigits + "-" + lastFourDigits;
   }

   if(this.phoneNumber == 7)
   {
     firstThreeDigits = this.phoneNumber.substring(0,3);
     lastFourDigits = this.phoneNumber.substring(3,6)

     return firstThreeDigits + "-" + lastFourDigits;
   }

   return "0000000000";
};

PhoneNumber.prototype.stripLeadingOne = function(str)
{
  if(str.length == 11 && str.charAt(0) == '1')
  {
     return str.substring(1,11);
  }

  return str;
}

PhoneNumber.prototype.isValidLength = function()
{
  if(this.phoneNumber.length >= 11)
  {
     return false;
  }

  if(this.phoneNumber.length < 10)
  {
     return false;
  }

  return true;
};

PhoneNumber.prototype.number = function() {
   
   if(!this.isValidLength())
   {
    return "0000000000";
   }
   
   return this.phoneNumber;
};

module.exports = PhoneNumber;