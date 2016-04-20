var PhoneNumber = function(tel) {
	var string = tel.replace(/\D/g,''),
		length = string.length,
		area = string.substring(0, 3),
		format = string;
  if(length < 10 || length > 11) {
    string = '0000000000';
    area = '000';
  }
  if(length === 11 && Number(string[0]) !== 1) {
    string = '0000000000';
    area = '000';
  }
  else if(length === 11) {
    string = string.substring(1);
    area = string.substring(1, 3);
  }
	this.number = function() {
	  return string;
	};
	this.areaCode = function() {
	  return area;
	};
	this.toString = function() {
		format = '(' + area + ') ' + string.substring(3, 6) + '-' + string.substring(6, 10);
		return format;
	};
};
module.exports = PhoneNumber;