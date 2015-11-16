var PhoneNumber = function(number) {
  this.string = number;
}

PhoneNumber.prototype.number = function() {
  var raw = this.string;
  var final = "";

  for (var i = 0; i < raw.length; i++) {
    if (parseInt(raw[i]) >= 0) {
      final += raw[i]
    }
  }

  if (final.length < 10 || final.length > 12) {
    return '0000000000'
  }

  if (final.length === 11) {
    if (parseInt(final[0]) !== 1) {
      return '0000000000';
    }
    return final.slice(1);
  }
  return final;
}

PhoneNumber.prototype.areaCode = function() {
  return this.string.slice(0,3)
}

PhoneNumber.prototype.toString = function() {
  return "(" + this.string.slice(0,3) + ") " + this.string.slice(3,6) + "-" + this.string.slice(6);
}

 module.exports = PhoneNumber;
