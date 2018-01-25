const TreeFunction = require("../../Common/Tree/TreeFunction.js");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if(preorder.length != inorder.length)
        return null;
    return bulid(0, 0, inorder.length - 1, preorder, inorder)
};

var bulid = function (preStart, inStart, inEnd, preorder, inorder) {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
        return null;
    }

    var root = new TreeNode(preorder[preStart]);

    var inIndex = 0;
    for (var i = inStart; i <= inEnd; i++) {
        if (inorder[i] == root.val)
            inIndex = i;
    }
    root.left = bulid(preStart + 1, inStart, inIndex - 1, preorder, inorder);
    root.right = bulid(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder);
    return root;
};

function TreeNode(num) {
    return TreeFunction.createTreeNode(num);
}
p = buildTree([4, 2, 1, 3, 7, 6, 9], [1, 2, 3, 4, 6, 7, 9]);
TreeFunction.Order(p,'pre');
