var PhoneNumber = function(input){
	//validate the input type
	if(typeof input !== "string") {
		throw "Invalid input type. Please give a number in string and try again.";
	}
	this.num = input;
};

PhoneNumber.prototype.number = function(){
	//clear the non-number char in the string
	var regex = /[0-9]/g;
	var n = this.num.match(regex).join("");

	var len = n.length;
	if(len < 10 || len > 11) { return "0000000000"; }
	if(len === 10) { return n; }
	if(len === 11) {
		if(n.charAt(0) === "1") {
			return n.substring(1);
		} else {
			return "0000000000";
		}
	} 
};

PhoneNumber.prototype.areaCode = function(){
	var n = this.num;
	return n.substring(0,3);
};

PhoneNumber.prototype.toString = function(){
	var n = this.num;
	var res = "(" + n.substring(0,3) + ")" + " " + n.substring(3,6) + 
				"-" + n.substring(6);
	return res;
};


module.exports = PhoneNumber;
