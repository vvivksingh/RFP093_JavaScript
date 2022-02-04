const pincodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validatePincode(pincode){
    if(pincodeRegex.test(pincode))
        console.log(pincode + " : Valid Pin Code !!");
    else
        throw pincode + " : PINCODE is Invalid !";
}

try{
    validatePincode("400088");
    validatePincode("400 088");
}
catch(e){
    console.error(e);
}