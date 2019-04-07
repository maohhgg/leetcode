/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = (height: number[]): number => {
    let ans: number = 0, left: number = 0, right: number = height.length - 1;

    while (left < right) {
        ans = Math.max(ans, (right - left) * Math.min(height[left], height[right]));
        if (height[left] < height[right])
            left++;
        else
            right--;
    }
    return ans;
};
console.log(maxArea([1, 3, 1, 2, 4, 2]));