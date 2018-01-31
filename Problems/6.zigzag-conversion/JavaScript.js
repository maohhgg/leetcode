/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (s.length == 0 || numRows < 2) return s;

    var string = Array.apply(null, Array(numRows)).map(function(item, i) {
        return '';
    });

    var flag = true;
    var l = 0;
    for (let i = 0; i < s.length; i++) {
        string[l] += s.charAt(i);
        if(flag)  l++;
        else l--;
        if(l == 0 || l == numRows-1) flag = !flag;
    }
    return string.join('');
};
console.log(convert("0123456789", 4))