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


var p = TreeFunction.createBiTree([6,2,8,1,4,null,null,null,null,3]);
// var p = TreeFunction.createBiTree([3,9,20,null,null,15,7]);
console.log(maxDepth(p));