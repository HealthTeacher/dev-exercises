//If the phone number is less than 10 digits assume that it is bad number
//If the phone number is 10 digits assume that it is good
//If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//If the phone number is 11 digits and the first number is not 1, then it is a bad number
//If the phone number is more than 11 digits assume that it is a bad number



function validatePhone(num){
    //first validate to make sure there are no non-valid characters
    var regex = /^([0-9\-\(\)\.\+\s]+)$/i;
    if(regex.test(num) === false){
        //aconsole.log("Phone number", num, "contains non valid characters");
        return "Phone number " + num + " contains non-numeric characters";
    }

    //sanitize phone number to just digits
    var cleanNum = num.replace(/\D/g,'');

    //get length
    var length = cleanNum.length;

    // return errors based on length and content of cleanNum
    // this method might not be the most efficient code but it provides users with detailed explanation about why their input is being rejected as invalid, and thus is a better UX
    if(length < 10){
        throw "Phone number " + num + " is less than 10 digits, please input a minimum of 10 digits";
    }else if(length > 11){
        throw "Phone number " + num + " contains more than 11 digitals, please input 11 or fewer digits";
    }else if(length === 11){
        if(cleanNum[0] !== "1"){
            throw "Phone number " + num + " contains 11 digits but doesn't contain a country code, please revise to 10 digits";
        }else{
            cleanNum = cleanNum.slice(-10);
        }
    }

    return cleanNum;
}

function getAreaCode(num){
    //first validate
    try{
        return validatePhone(num).slice(0,3);
    }catch(e){
        throw e;
    }
}
function format(num) {
    //use getAreaCode function which includes validation
    try{
        num = validatePhone(num);
        return "(" + getAreaCode(num) + ") " + num.slice(3,6) + "-" + num.slice(6);
    }catch(e){
        throw e;
    }
}
