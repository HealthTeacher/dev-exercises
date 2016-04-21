var PhoneNumber = function(phoneNumber) {
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
   console.log(this.phoneNumber);
   
   if(!this.isValidLength())
   {
    return "0000000000";
   }
   
   return this.phoneNumber;
};

module.exports = PhoneNumber;