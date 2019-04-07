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
 * @return {number[][]}
 */
let levelOrderBottom = (root: TreeNode): number[][] => {
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
            if (item.right) tmp.push(item.right)
        });
        number.unshift(res);
        queue = tmp;
    }
    return number;
};


let p1 = Tree.createBiTree([3, 9, 20, null, null, 15, 7]);
let p1l = levelOrderBottom(p1);
console.log(p1l);
