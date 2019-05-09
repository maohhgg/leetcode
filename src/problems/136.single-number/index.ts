/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums:number[]):number => {
    let res:number = 0;
    nums.forEach(val => res = res^val)
    return res;
};

console.log(singleNumber([2,1,1]))
