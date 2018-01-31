/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var ans = 0, left = 0, right = height.length - 1;
    while (left < right){
        ans = Math.max(ans, (right - left) * Math.min(height[left], height[right]))
        if(height[left] < height[right]){
            left++;
        }else {
            right--;
        }
    }
    return ans;
};
console.log(maxArea([1, 3, 1, 2, 4, 2]))