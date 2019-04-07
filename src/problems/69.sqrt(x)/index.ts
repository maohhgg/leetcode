/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x: number): number => {

    let left: number, right: number, mid: number;

    if (x <= 1) return x;
    left = 1; right = x;

    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (mid == Math.floor(x / mid)) return mid;
        else if (mid < Math.floor(x / mid)) left = mid + 1;
        else right = mid - 1;
    }

    return right;
};

console.log(mySqrt(3));