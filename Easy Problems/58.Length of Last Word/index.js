/**
 * @param {string} s
 * @return {number}
 */
// javascript easy
var lengthOfLastWord = function(s) {
    if(s == "" || s == null) return 0;
    var a = s.split(/[ ]+/);
    console.log(a);
    if(a[a.length-1] == ""){
        return a[a.length-2].length;
    }
    return a[a.length-1].length;
};
console.log(lengthOfLastWord("b   a    "));