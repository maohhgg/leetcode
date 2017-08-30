const TreeFunction = require("../../Tree/TreeFunction.js");
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
    return dfs(0, nums.length - 1);

    function dfs(start, end) {
        if (start > end)
            return null;

        var mid = (start + end) >> 1;
        var node = TreeNode(nums[mid]);
        node.left = dfs(start, mid - 1);
        node.right = dfs(mid + 1, end);

        return node;
    }
};

var TreeNode = function(num){
   return new TreeFunction.createTreeNode(num);
}
var q = sortedArrayToBST([2,3,4,6,7,13,15,17,18]);
TreeFunction.inOrderTraverse(q);