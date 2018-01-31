/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    for (var i = 0; i * i <= c; ++i) {
        var remain = c - i * i;
        var r = parseInt(Math.sqrt(remain));
        if (remain == r * r) return true;
    }
    return false;
};
console.log(judgeSquareSum(4));