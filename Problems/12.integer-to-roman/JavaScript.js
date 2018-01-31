/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var s = "";
    var m = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD':400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX':9,
        'V': 5,
        "IV":4,
        'I': 1
    }
    var i = 0;
    for (var key in m) {
        if(num >= m[key]){
            i = parseInt(num / m[key]);
            num = num % m[key];
            s += ""+ str(key,i);
        }
        i=0;
    }
    return s;
};
function str(s,n){
    var str = "";
    for (var i = 0; i < n; i++) {
        str += "" +s;
    }
    return str;
}

// intToRoman(100);
console.log(intToRoman(3999))