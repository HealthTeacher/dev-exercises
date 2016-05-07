function Words() {
  this.count = function (str) {
    var _formatStr, _wordArray, keys;
    // This regex strips out tabs, carriage Returns, new lines and double spaces
    // See Also: https://xkcd.com/208/
    _formatStr = str.replace(/\t|\r?\n|\s\s+/igm, ' ').toLowerCase().trim();
    _wordArray = _formatStr.split(' ');
    countedList = this.totalCount(_wordArray);
    return countedList;
  },
  this.totalCount = function (arr) {
    return arr.reduce(function(memo, word){
      memo[word] = (memo[word] || 0) + 1;
      return memo;
    }, {});
  }
};

module.exports = Words;
