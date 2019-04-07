import {TreeNode, Tree} from "../../common/tree";
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
 * @return {number[][]}
 */
const pathSum = (root: TreeNode, sum: number): number[][] => {
    let result: number[][] = [];
    pathSumHelper(root, sum, [], result);
    return result;
};

const pathSumHelper = (root: TreeNode, sum: number, path: number[], result: number[][]) => {
    if (!root) return false;
    let over = sum - root.val;
    path.push(root.val);
    if (!root.left && !root.right && over == 0) result.push(path);

    pathSumHelper(root.left, over, path.slice(), result);
    pathSumHelper(root.right, over, path.slice(), result);
};

let p = Tree.createBiTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1]);
Tree.logTree(p);
console.log(pathSum(p, 22));