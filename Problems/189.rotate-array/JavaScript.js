/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    nums.unshift(...nums.splice(nums.length  - (k % nums.length),(k % nums.length)));
};
var arr = [1, 2, 3, 4, 5, 6, 7]
rotate(arr, 3)
console.log(arr)