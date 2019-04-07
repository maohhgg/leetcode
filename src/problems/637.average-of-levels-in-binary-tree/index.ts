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
 * @return {number[]}
 */
let averageOfLevels = (root: TreeNode): number[] => {
    return levelOrder(root).map(item => (item.reduce((t, n) => t + n) / item.length));
};

// 102. Binary Tree Level Order Traversal 
let levelOrder = (root: TreeNode): number[][] => {
    if (!root) return [];
    let queue: TreeNode[] = [], number: number[][] = [];
    let tmp: TreeNode[], res: number[];
    queue.push(root);

    while (queue.length) {
        res = [];
        tmp = [];
        queue.forEach((item) => {
            res.push(item.val);

            if (item.left) tmp.push(item.left);
            if (item.right) tmp.push(item.right);
        });
        queue = tmp;
        number.push(res);
    }
    return number;
};

let p = Tree.createBiTree([1, 3, 2, 5]);
let p1 = Tree.createBiTree([3, 9, 20, null, null, 15, 7]);
let q = Tree.createBiTree([2, 1, 3, null, 4, null, 7]);

console.log(averageOfLevels(p));
console.log(averageOfLevels(p1));
console.log(averageOfLevels(q));