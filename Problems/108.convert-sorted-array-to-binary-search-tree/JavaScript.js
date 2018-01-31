const Tree = require("../../Common/Tree/TreeFunction.js")
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

var sortedArrayToBST = function (nums) {
    return dfs(nums, 0, nums.length - 1);
};
var dfs = function (nums, start, end) {
    if (start > end)
        return null;
    var mid = (start + end) >> 1;
    var node = new TreeNode(nums[mid]);
    node.left = dfs(nums, start, mid - 1);
    node.right = dfs(nums, mid + 1, end);

    return node;
};

var TreeNode = function (num) {
    return new tree.createTreeNode(num);
}
var q = sortedArrayToBST([1, 2, 3, 4, 5, 6]);
Tree.logTree(q);