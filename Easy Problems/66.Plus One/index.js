/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOneX = function(digits) {
    var a = parseInt(digits.join(""));
    var t = (a + 1).toString().split("");
    for (var i = 0; i < t.length; i++) {
        t[i] = parseInt(t[i]); 
    }
    return t;
};

var plusOne = function(digits) {
    digits[digits.length-1] ++;
    for (var i = digits.length-1; i >= 0; i--) {
        if (digits[i] == 10) {
            digits[i] = 0;
            if(i == 0){
                digits.unshift(1)
            } else{
                digits[i-1]++;
            }
        }
    }
    return digits;
};
console.log(plusOne([9,9,9]))