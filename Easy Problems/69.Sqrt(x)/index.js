/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    var left, right, mid;
    if (x <= 1) {
        return x;
    }
    left = 1;
    right = x;

    while (left <= right) {
        mid = parseInt(left + (right - left) / 2);
        if (mid == parseInt(x / mid)) {
            return mid;
        } else if (mid < parseInt(x / mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};

console.log(mySqrt(3));