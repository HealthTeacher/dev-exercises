/**
 * Created by justin maurer on 7/27/16.
 */

var Word = function() {};

Word.prototype.count = function(phrase){
	var re = /[\s\n]+/;
	var phraseArray = phrase.trim().split(re);
	var wordCounts = {};
	for ( i=0; i < phraseArray.length; i++ ) {
		var word = phraseArray[i].toLowerCase();
		if ( wordCounts.hasOwnProperty(word) ) {
			for( var key in wordCounts ) {
			    if( key===word ) {
			    	wordCounts[key]++;
			    }
			}
		} else {
	    	wordCounts[word] = 1;
	    }
	}
	return wordCounts;
};

module.exports = Word;