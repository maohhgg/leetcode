import {TreeNode, Tree} from "../../common/tree";
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
let mergeTrees = (t1: TreeNode, t2: TreeNode): TreeNode => {
    if (t1 === null) return t2;
    if (t2 === null) return t1;
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};

let p = Tree.createBiTree([1, 1, null, 1, null, 1, null]);
//     1
//    /
//   1
//  /
// 1
let q = Tree.createBiTree([1, null, 1, null, 1, null, 1]);
//    1
//     \
//      1
//       \
//        1
Tree.logTree(mergeTrees(p, q));
//     2
//    / \
//   1   1
//  /     \
// 1       1