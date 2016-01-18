var Year = function(year) {
	this.year = year;

	this.isLeap = function() {
		if (this.year % 400 === 0 || this.year % 100 !== 0 && this.year % 4 === 0) {
			return true;
		} else {
			return false;
		}
	};
};

module.exports = Year;
