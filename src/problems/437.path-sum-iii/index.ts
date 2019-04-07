import {Tree, TreeNode} from "../../common/tree";
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
 * @return {number}
 */
const pathSum = (root: TreeNode, sum: number): number => {
    if (!root) return 0;
    return pathSumHelper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

const pathSumHelper = (root: TreeNode, sum: number):number => {
    if (!root) return 0;
    return (root.val == sum ? 1 : 0) + pathSumHelper(root.left, sum - root.val) + pathSumHelper(root.right, sum - root.val);
};

let p1 = Tree.createBiTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
Tree.logTree(p1);
console.log(pathSum(p1, 8));

let p = Tree.createBiTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1]);
Tree.logTree(p);
console.log(pathSum(p, 22));