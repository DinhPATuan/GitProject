function upCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
        console.log("Upper Case")
    } else {
        console.log("Not Upper Case")
    }
};

upCase('Abcd');

function zipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
        return true;
    } 
    return false;
}

let zipcode = "03201-2150"
    console.log(zipCode(zipcode));
