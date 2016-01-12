var Words = function() {
  this.count = function(data){
    var resultHash = {};

    // split the input string on one or more instances of
    // whitespace, tab, or newline
    wordsArray = data.trim().split(/[\n\t\s]+/);

    for (i=0; i < wordsArray.length; i++){

      // Check for string exists as property on object and, if so, send that
      // value as an array to allow it to be treated as a string literal.
      if(typeof(resultHash[wordsArray[i]]) == "function"){
          resultHash[[wordsArray[i]]] = 1;
      }
      // Otherwise, simply treat as a string literal key for the hash object.
      else{
        // Either initialize the count at 1 or increment as we go.
        if(resultHash[wordsArray[i]])
          resultHash[wordsArray[i]]++;
        else
          resultHash[wordsArray[i]] = 1;
      }
    }
    return resultHash
  };
};

module.exports = Words;
