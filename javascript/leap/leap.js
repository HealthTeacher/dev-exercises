var Year = function(year) {
	this.isLeap = function() {
		var leap = false;
		if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
			leap = true;
		}
		return leap;
	};
};
module.exports = Year;