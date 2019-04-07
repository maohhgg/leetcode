import {Tree, TreeNode} from "../../common/tree";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 队列逐一对比
let isSameTree = (p: TreeNode, q: TreeNode): boolean => {
    let queue1 = [];
    let queue2 = [];

    queue1.push(p);
    queue2.push(q);

    while (queue1.length && queue2.length) {
        let p = queue1.pop();
        let q = queue2.pop();
        let valP, valQ;

        if (p === null) valP = null;
        else {
            valP = p.val;
            queue1.push(p.left);
            queue1.push(p.right);
        }

        if (q === null) valQ = null;
        else {
            valQ = q.val;
            queue2.push(q.left);
            queue2.push(q.right);
        }

        if (valP !== valQ) return false;

    }

    return queue1.length === queue2.length;
};


// 遍历对比
let isSameTree2 = (p: TreeNode, q: TreeNode): boolean => {
    if (!p && !q) return true;
    if (p.val !== q.val) return false;
    return isSameTree2(p.left, q.left) && isSameTree2(p.right, q.right);
};


let p = Tree.createBiTree([1, 2, 3, 4]);
let q1 = Tree.createBiTree([1, 2, 3, 4]); // true
let q2 = p; // true
let q3 = Tree.createBiTree([6, 2, 8, 1, 4, null, null, null, null, 3]); // false
console.log("p === q1 " + isSameTree(p, q1));
console.log("p === q2 " + isSameTree(p, q2));
console.log("p === q3 " + isSameTree(p, q3));