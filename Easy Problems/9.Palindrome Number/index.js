/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var s = x.toString();
    var a = s.split("");
    var l = a.length;
    for(var i = 0;i < l / 2; i++){
        if(a[i] !== a[l-1-i]){
            return false;
        }
    }
    return true;
};
console.log(isPalindrome(12321));