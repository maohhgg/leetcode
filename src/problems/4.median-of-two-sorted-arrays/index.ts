/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    let merge: number[] = nums1.concat(nums2);
    merge.sort((a, b) => a - b);
    let len = merge.length;
    if (len % 2 == 0) {
        return (merge[len / 2 - 1] + merge[len / 2]) / 2;
    } else {
        return merge[Math.floor(len / 2)];
    }
};

console.log(findMedianSortedArrays([1, 2], [3, 4, 5]));