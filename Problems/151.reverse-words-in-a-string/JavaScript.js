/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var arg =  str.trim().split(/[ ]+/);
    arg.reverse();
    return arg.join(" ");
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("   a   b "));