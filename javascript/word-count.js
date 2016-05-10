/*
  Tests call for a basic js object with a count function that returns the count of words provided in a string.
  String will need to be split with regex, normalised, and then looped over with results put into a hash.
  A basic regex that will match all whitespace characters and replace them with a single space should work.
  Normalise input to lowercase.
  Split on the remaining single spaces.
  Loop over resulting array and increment counts accordingly, skpping blanks.
  Loop logic could be cleaner.
 */
module.exports = function() {
  this.count = function(words) {
    var array = words.replace(/\s+/, ' ').toLowerCase().split(' ');
    var result = {};
    array.forEach(function(word) {
      if (result[word]) {
        result[word]++;
      } else if (word !== '' && !result[word]) {
        result[word] = 1;
      }
    });
    return result;
  };
};