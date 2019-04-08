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
 * @return {number}
 */
const maxPathSum = (root: TreeNode): number => {
    if (!root) return 0;
    let result = root.val;
    let helper = (root: TreeNode) => {
        if (!root) return 0;
        let l = helper(root.left);
        let r = helper(root.right);
        result = Math.max(l + r + root.val, result);
        return Math.max(root.val + l, root.val + r, 0);
    };
    helper(root);
    return result;
};

// test case 91
let p1 = Tree.createBiTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);
//                   9
//             6          -3
//          n     n    -6     2
//         n n   2 n  -6-6  -6 n
Tree.logTree(p1);
console.log(maxPathSum(p1));
