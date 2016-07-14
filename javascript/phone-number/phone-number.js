var PhoneNumber = function( phone ) {
  this.phone = phone;
}

PhoneNumber.prototype.number = function number() {
  // remove any non digit
  phone = this.phone.replace(/\D/g, '');

  //match any digit 10 or 11 times
  var re = /\d{10,11}/;
  return (
    // test against regex
    re.test(phone) ? (
      // pass
      ( phone.length == 10 ?
          // if its 10 digits return it
          phone : (
          // if it's 11 digits, check to see if first digit is a 1
          // if it is return only 10, otherwise fail return false
          ( phone[0] == 1 ? phone.substr(1) : false )
        )
      )
    // fail return false
    ) : false
  );
}

module.exports = PhoneNumber;
