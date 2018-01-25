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
var buildTree = function (inorder, postorder) {
    return bulid(inorder.length - 1, 0, inorder.length - 1, inorder, postorder);


};
var bulid = function (index, poStart, poEnd, inorder, postorder) {
    if (poStart > poEnd)
        return null;

    var root = new TreeNode(postorder[index]);
    var pos = inorder.indexOf(postorder[index], poStart);

    root.left = bulid(index - (poEnd - pos) - 1, poStart, pos - 1, inorder, postorder);
    root.right = bulid(index - 1, pos + 1, poEnd, inorder, postorder);

    return root;
};

function TreeNode(num) {
    return TreeFunction.createTreeNode(num);
}
p1 = TreeFunction.createBiTree([1, 2, 3, 4, null, null, null, 3]);
/**
 *      1
 *   /   \
 *  2     3
 * / \   / \
 *4   5 6   7
 *
 * 
 * 
 */
p = buildTree([2, 1, 3], [2, 3, 1]);
// TreeFunction.Order(p1, 'pre');
// TreeFunction.Order(p1, 'in');
// TreeFunction.Order(p1, 'last');
TreeFunction.Order(p, 'pre');
TreeFunction.Order(p, 'in');
TreeFunction.Order(p, 'last');
// TreeFunction.logTree(p1);
TreeFunction.logTree(p);