module.exports = PhoneNumber;

function PhoneNumber(input) {
  input = input.replace(/\D/g, '');

  this.number = function () {
    if (input.length === 11 && input.charAt(0) == 1) {
      return input.slice(1);
    } else if (input.length !== 10) {
      return '0000000000'
      alert('Uh-oh, that number is invalid. Please re-enter');
    } else {
      return input;
    }
  }
  this.areaCode = function () {
    input = input.substr(0,3);
    return input;
  }
  this.toString = function (){
    input = '(' + input.substr(0,3) + ') ' + input.substr(3,3) + '-' + input.substr(6);
    return input;
  }
}


