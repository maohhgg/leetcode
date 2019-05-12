/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import {Tree, TreeNode} from "../../common/tree";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = (root: TreeNode): boolean => {
    return !root ||
            isBalanced(root.left) && isBalanced(root.right) &&
            (Math.abs(height(root.left) - height(root.right)) <= 1)
};
const height = (root: TreeNode): number => {
    return root == null ? 0 : 1 + Math.max(height(root.left), height(root.right));
};

let p1 = Tree.createBiTree([3,9,20,null,null,15,7]);
let p2 = Tree.createBiTree([1,2,2,3,3,null,null,4,4]);

console.log(isBalanced(p1));
console.log(isBalanced(p2));