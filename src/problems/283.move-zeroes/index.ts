/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = (nums: number[]) => {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) nums[index++] = nums[i];
    }
    while (index < nums.length) {
        nums[index++] = 0;
    }
};
let nums = [2, 1];
moveZeroes(nums);
console.log(nums);