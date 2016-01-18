var PhoneNumber = function(phoneNumber) {
	this.phoneNumber = phoneNumber;
	var cleanNumber = this.phoneNumber.replace(/\D/g, '');

	this.number = function() {
		if (cleanNumber.length === 11 && cleanNumber[0] === '1') {
			return cleanNumber.slice(1);
		} else if (cleanNumber.length === 10) {
			return cleanNumber;
		} else {
			return '0000000000';
		}
	}

	this.areaCode = function() {
		return cleanNumber.slice(0,3);
	};

	this.toString = function() {
		return "("+cleanNumber.slice(0,3)+") "+cleanNumber.slice(3,6)+"-"+cleanNumber.slice(6);
	};
};

module.exports = PhoneNumber;
