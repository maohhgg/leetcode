const TreeFunction = require("../../Tree/TreeFunction.js");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root){
        if(root.left === null  && root.right === null)
            return sum === root.val;
        else
            return (hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val));
    } else
        return false;
};
var p = TreeFunction.createBiTree([5,4,8,11,null,13,4,7,2,null,null,null,null,null,1]);
let sum = 22;
TreeFunction.logTree(p);
console.log(hasPathSum(p,sum));