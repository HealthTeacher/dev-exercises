/**
 * Created by justin maurer on 7/27/16.
 */

var Year = function(yearInput) {
    this.testYear = yearInput;
};

Year.prototype.isLeap = function(){
    var year = this.testYear;
    if (divisibleBy4(year)) {
        if (divisibleBy100(year)) {
            if (divisibleBy400(year)) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

function divisibleBy4(number) {
    if (number % 4 === 0) {
        return true;
    }
    return false;
}
function divisibleBy100(number) {
    if (number % 100 === 0) {
        return true;
    }
    return false;
}
function divisibleBy400(number) {
    if (number % 400 === 0) {
        return true;
    }
    return false;
}
module.exports = Year;