import {TreeNode,Tree} from "../../common/tree";
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
let hasPathSum = (root: TreeNode, sum: number): boolean => {
    if(!root) return false;
    if(root.left === null  && root.right === null) return sum === root.val;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

let p = Tree.createBiTree([5,4,8,11,null,13,4,7,2,null,null,null,null,null,1]);
let sum = 22;
Tree.logTree(p);
console.log(hasPathSum(p,sum));