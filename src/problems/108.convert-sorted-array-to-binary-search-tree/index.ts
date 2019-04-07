import {TreeNode, Tree} from "../../common/tree";
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = (nums: number[]): TreeNode => {
    return dfs(nums, 0, nums.length - 1);
};
let dfs = (nums:number[], start:number, end:number):TreeNode => {
    if (start > end) return null;

    let mid = Math.ceil(start + ((end - start) / 2));
    let node = new TreeNode(nums[mid]);
    node.left = dfs(nums, start, mid - 1);
    node.right = dfs(nums, mid + 1, end);

    return node;
};

let q = sortedArrayToBST([-10,-3,0,5,9]);
Tree.logTree(q);