function PhoneNumber(number) {
  var phone = this;
  var num = clean(number);

  if (num.length < 10 || num.length > 11) {
    this.num = '0000000000';
  }

  if (num.length === 10) {
    this.num = num;
  }

  if (num.length === 11) {
    if (num.substr(0, 1) == 1) {
      this.num = num.substr(1);
    } else {
      this.num = '0000000000';
    }
  }

  function clean(number) {
    return number.replace(/\./g, '').replace(/\(|\)/g, '').replace(/ /g, '').replace(/-/, '');
  }

  return {
    number: function() {
      return phone.num;
    },
    areaCode: function() {
      return phone.num.substr(0, 3);
    },
    toString: function() {
      var num = phone.num.replace(/\D/g, '');
      var n = num.match(/^(\d{3})(\d{3})(\d{4})$/);

      return '(' + n[1] + ') ' + n[2] + '-' + n[3];
    }
  }
}

module.exports = PhoneNumber;
