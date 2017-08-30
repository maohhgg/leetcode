const TreeFunction = require("../../Tree/TreeFunction.js")
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
    if(root){
        return Math.max(maxDepth(root.left) , maxDepth(root.right)) + 1;
    } else if(root === null){
        return 0;
    }
};


var p = TreeFunction.createBinaryTree([1,2,3,0,0,4,0,0,2,4,0,0,3,0,0]);
console.log(maxDepth(p));