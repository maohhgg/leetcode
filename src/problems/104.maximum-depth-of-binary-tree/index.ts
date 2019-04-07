import {Tree,TreeNode} from "../../common/tree";
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

let maxDepth = (root: TreeNode): number => {
    if(!root) return 0;
    return Math.max(maxDepth(root.left) , maxDepth(root.right)) + 1;
};


let p = Tree.createBiTree([6,2,8,1,4,null,null,null,null,3]);
// let p = Tree.createBiTree([3,9,20,null,null,15,7]);
console.log(maxDepth(p));
console.log(Tree.countDepth(p) == maxDepth(p)); // true