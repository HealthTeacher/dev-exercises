var PhoneNumber = function(input) {
  // Object attibutes
  this.input = input
  this.invalidNumber = "0000000000"

  // Object methods

  // Cleans numbers based on assumptions we have defined.
  this.number = function() {

    // strip non-alphanumeric characters from input
    strippedNumber = input.replace(/\W/g, '');

    // Switch statement on the length of strippedNumber.
    switch(true) {
      case strippedNumber.length < 10:
        strippedNumber = this.invalidNumber;
      case strippedNumber.length == 10:
        break;
      case strippedNumber.length == 11:
        if(strippedNumber[0] == "1")
          strippedNumber = strippedNumber.slice(1);
        else
          strippedNumber = this.invalidNumber;
        break;
    }
    return strippedNumber;
  };

  // Define three distinct portions of a phone number.
  this.areaCode = function() { return this.number().slice(0,3) };
  this.prefix = function() { return this.number().slice(3,6) };
  this.lineNumber = function() { return this.number().slice(6,10) };

  this.toString = function() {
    return  "(" + this.areaCode() + ") "
                + this.prefix() + "-"
                + this.lineNumber();
  };
};

module.exports = PhoneNumber;
