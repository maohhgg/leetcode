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
 * @return {string[]}
 */
let binaryTreePaths = (root: TreeNode): string[] => {
    if (!root) return [];
    let result = [].concat(treePath(root.left, root.val), treePath(root.right, root.val));
    return result.length === 0 ? [`${root.val}`] : result;
};

let treePath = (root, str) => {
    if (!root) return [];
    else {
        if ((root.left == null) && (root.right == null)) return `${str}->${root.val}`;
        else return [].concat(treePath(root.left, `${str}->${root.val}`), treePath(root.right, `${str}->${root.val}`));
    }
};

let p = Tree.createBiTree([1, 2, 3, null, 5, null, null, null, null, 10, 11]);
let p1 = Tree.createBiTree([1]);
console.log(binaryTreePaths(p));
console.log(binaryTreePaths(p1));