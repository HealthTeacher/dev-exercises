/**
 * Year object used for leap year checking
 * @param {[int|string]} $year [year value to check]
 */
var Year = function($year){
	this.year = this.validateYear($year);
};

/**
 * Checks whether or not the value passed
 * during instantiation is a valid numeric
 * value.  Parses String numeric vals to ints.
 *
 * When non-numeric or invalid types or passed
 * a console warning is fired indicating the fault
 * 
 * @param  {[int |string]} $year [year value to validate]
 * @return {[int | passed type]}       [returns int val of year or data type initiall passed]
 */
Year.prototype.validateYear = function($year){
	var regex = /^[0-9]+$/;
	
	this.valid = true;

	if(!regex.test($year) || (typeof $year !== 'string' && typeof $year !== 'number')){
		console.warn($year + ' is not type or value.  Please only use numeric characters.');
		this.valid = false;
	}
	else	parseInt($year);

	return $year;
};

/**
 * Runs leap year calculation and returns
 * the result via Boolean.
 * 
 * @return {Boolean|NaN} [We return NaN when invalid data was passed to the class]
 */
Year.prototype.isLeap = function(){
	if(!this.valid)	return NaN;

	return ((this.year % 4 === 0) && (this.year % 100 !== 0)) || (this.year % 400 === 0);
};

module.exports = Year;