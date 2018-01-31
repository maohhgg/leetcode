/**
 * @param {number} num
 * @return {boolean}
 */
// 69.Sqrt(x)
var isPerfectSquare = function(num) {
    if(num < 1) return false;  
    if(num == 1) return true;  
    var left, right, mid;
    left = 1;
    right = num;

    while (left <= right) {
        mid = parseInt(left + (right - left) / 2);
        if (mid == parseInt(num / mid)) {
            return (mid*mid === num);
        } else if (mid < parseInt(num / mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return (right*right === num);
};

console.log(isPerfectSquare(-2));