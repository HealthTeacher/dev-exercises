var Words = function() {
  this.count = function(data){
    var resultHash = {};

    // split the input string on one or more instances of whitespace.
    wordsArray = data.trim().split(/[\s]+/);

    for (i=0; i < wordsArray.length; i++){
      currentWord = wordsArray[i]
      // Either initialize the count at 1 or increment as we go.
      if(resultHash[currentWord])
        resultHash[currentWord]++;
      else
        resultHash[currentWord] = 1;

      // If string exists as property on object, then the value of this key will
      // be NaN. If so, we will send that key as an array to allow it to be
      // treated as a string literal.
      if(isNaN(resultHash[currentWord]))
          resultHash[[currentWord]] = 1;
    }
    return resultHash
  }
};

module.exports = Words;
