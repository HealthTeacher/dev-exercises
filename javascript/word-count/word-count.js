function wordCount(words) {
	//validate the input type and value before counting
	if(typeof words !== "string") {
		throw "Invalid input type. Please give a string and try again.";
	}
	var arr = words.trim().split(/\s+/);
	if(arr.length === 0) { return "Empty string"; }

	var store = {};

	for(word in arr) {
		var key = arr[word];
		if(store.hasOwnProperty(key) === false) {
			store[key] = 1;
		} else {
			store[key]++;
		}
	}

	return store;

}

module.exports = wordCount;