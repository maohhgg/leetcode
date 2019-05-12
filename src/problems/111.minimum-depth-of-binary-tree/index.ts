/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import {TreeNode, Tree} from "../../common/tree";

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root: TreeNode): number => {
    if (root === null) return 0;

    if (root.left && root.right) return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    else if (root.left) return minDepth(root.left) + 1;
    else if (root.right) return minDepth(root.right) + 1;

    return 1;
};

// let p = Tree.createBiTree([3,9,20,null,null,15,7]);
let p = Tree.createBiTree([1, 2]);
console.log(minDepth(p));