const TreeFunction = require("../../Tree/TreeFunction.js");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    if (t1 === null) return t2;
    if (t2 === null) return t1;
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};

var p = TreeFunction.createBiTree([1, 3, 2, 5]);
var q = TreeFunction.createBiTree([2, 1, 3, null, 4, null, 7]);

TreeFunction.logTree(mergeTrees(p,q));