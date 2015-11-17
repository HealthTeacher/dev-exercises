module.exports = PhoneNumber;

function PhoneNumber (num) {
  num = num.replace(/[(]|[)]|[-]|[\s]|[.]/g, '');
  this.number = function () {
    if (num.length === 11 && num[0] === '1') {
      num = num.slice(1);
      return num;
    }
    else if (num.length !== 10){
      num = '0000000000';
      return num;
    } else {
      return num;
    }
  };
  this.areaCode = function () {
    num = num.slice(0, 3);
    return num;
  };
  this.toString = function () {
    num = '(' + num.slice(0, 3) + ') '
              + num.slice(3, 6) + '-'
              + num.slice(6);
    return num;
  };
};
