/**
 * @param {number} num
 * @return {boolean}
 */ // 69.Sqrt(x)
let isPerfectSquare = (num: number): boolean => {
    if (num < 1) return false;
    if (num == 1) return true;
    let left, right, mid;
    left = 1;
    right = num;

    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);
        if (mid == Math.floor(num / mid)) {
            return (mid * mid === num);
        } else if (mid < Math.floor(num / mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return (right * right === num);
};

console.log(isPerfectSquare(16));