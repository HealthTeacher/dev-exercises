var PhoneNumber = function(input) {
  this.input = input;
  cleanedInput = this.input.replace(/\D/g,'');
  validationNumber = PhoneNumber.prototype.number();
};

PhoneNumber.prototype.number = function() {

  validationOutput = '0000000000';

  if(cleanedInput.length != 10) {
    if(cleanedInput.length == 11 && cleanedInput.charAt( 0 ) == '1') {
      validationOutput = cleanedInput.substr(1);
    }
    return validationOutput;
  } else {
    return cleanedInput;
  }

};

PhoneNumber.prototype.areaCode = function() {

  areaCodeOnly = validationNumber.substr(0, 3);
  if(areaCodeOnly.substr(0, 3) == '123') {
    return areaCodeOnly;
  } else {
    return '000';
  }

};

PhoneNumber.prototype.toString = function() {

  return areaCodeOnly = validationNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

};

module.exports = PhoneNumber