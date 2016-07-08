/**
 * Method for phone number capture
 * and validation
 * @param {[String]} $tfn [telephone number for validation]
 */
var PhoneNumber = function($tfn) { 
	this.raw = $tfn;
	this.validated = this.validate(this.clean());
};

/**
 * Applies validation rules to the cleaned
 * phone number
 * @param  {[String]} $scrubbed [Phone number stripped down to numerals]
 * @return {[String]}           [Returns valid number or invalid set of zeroes]
 */
PhoneNumber.prototype.validate = function($scrubbed){
	if(
		$scrubbed.length < 10 || 
		$scrubbed.length > 10 
	){
		return '0000000000';
	} else {
		return $scrubbed;
	}
};

/**
 * Method for preparing raw telephone number
 * for validation logic.
 *
 * Strips all alphas, punctuation and whitespace 
 * from [this.raw]
 *
 * Additionally, leading 1s are trimmed from 11-digit nums
 * 
 * @return {[String]} [phone number prepped for validation]
 */
PhoneNumber.prototype.clean = function(){
	var $scrubbed = this.raw.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]|\s+|[a-zA-Z]/g, '');
	
	//trim the leading one for numbers 11 digits in length
	if(
		$scrubbed.length === 11 && 
		$scrubbed.charAt(0) == '1'
	){
		$scrubbed = $scrubbed.substring(1);
	}

	return $scrubbed;
};

/**
 * @return {[String]} [Validated phone number w/o formatting]
 */
PhoneNumber.prototype.number = function(){
	return this.validated;
};

/**
 * @return {[String]} [Validated 3-digit area code]
 */
PhoneNumber.prototype.areaCode = function(){
	return this.validated.substr(0,3);
};

/**
 * @return {[String]} [Validated fully-formatted 10-digit phone number]
 */
PhoneNumber.prototype.toString = function() {
	var n = this.validated;
	return '(' + n.substr(0, 3) + ') ' + n.substr(3, 3) + '-' + n.substr(6, 4);
};

module.exports = PhoneNumber;