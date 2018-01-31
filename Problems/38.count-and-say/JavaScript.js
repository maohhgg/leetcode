/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1) return "1";
    if(n == 2) return "11";
    var str = countAndSay(n-1).split("");
    var s = "";
    var c = 1;
    for (var i = 0; i < str.length; i++) {
        if(str[i] == str[i+1]){
            c++;
        } else {
            s = s + c + str[i];
            c = 1;   
        }
    }
    return s;
};
console.log(countAndSay(10));