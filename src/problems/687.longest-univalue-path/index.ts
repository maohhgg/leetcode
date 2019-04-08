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
 * @return {number}
 */
const longestUnivaluePath = (root: TreeNode): number => {
    let result = 0;

    let helper = (root: TreeNode, rootVal: number): number => {
        if (!root) return 0;
        let l = helper(root.left, root.val);
        let r = helper(root.right, root.val);
        result = Math.max(result, l + r);
        if (root.val == rootVal) return Math.max(l, r) + 1;
        return 0;
    };

    if (root) helper(root, root.val);

    return result;
};

let p1 = Tree.createBiTree([1, 4, 5, 1, 1, null, 5]);
// let p1 = Tree.createBiTree([1, 4, 5, 4, 4, 5]);
Tree.logTree(p1);
console.log(longestUnivaluePath(p1));

