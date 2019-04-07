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
 * @return {boolean}
 */

// 队列逐一对比
let isSymmetric = (root: TreeNode): boolean => {
    if (root === null) return true;
    // 判断是否初始节点一定有左右孩子
    if (root.left == null && root.right == null) {
        return true;
    } else if (root.left !== root.right && root.left == null || root.right == null) {
        return false;
    }

    let queue1 = [];
    let queue2 = [];

    // 分别对左右孩子用前序和后序遍历  结果相等及左右对称
    leftTree(root.left, queue1);
    rightTree(root.right, queue2);
    if (queue1.length !== queue2.length) return false;

    while (queue1.length && queue2.length) {
        if (queue1.pop() !== queue2.pop()) return false;
    }

    return queue1.length === queue2.length;
};
let leftTree = (root: TreeNode, queue: number[]) => {
    if (root) {
        queue.push(root.val);
        leftTree(root.left, queue);
        leftTree(root.right, queue);
    } else {
        queue.push(null);
    }
};
let rightTree = (root, queue) => {
    if (root) {
        queue.push(root.val);
        rightTree(root.right, queue);
        rightTree(root.left, queue);
    } else {
        queue.push(null);
    }
};


// 遍历对比
let isSymmetric2 = (root: TreeNode): boolean => {
    return root == null || isSymmetricHelp(root.left, root.right);
};
let isSymmetricHelp = (left: TreeNode, right: TreeNode): boolean => {
    if (left == null || right == null)
        return left == right;
    if (left.val != right.val)
        return false;
    return isSymmetricHelp(left.left, right.right) && isSymmetricHelp(left.right, right.left);
};


let p1 = Tree.createBiTree([1, 2, 2, 3, 4, 4, 3]);
console.log("BiTree p1 = " + isSymmetric(p1));
//  true
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

let p2 = Tree.createBiTree([1, 2, 2, null, 3, null, 3]);
console.log("BiTree p2 = " + isSymmetric2(p2));
// false
//     1
//    / \
//   2   2
//    \   \
//    3    3

let p3 = Tree.createBiTree([1, 2, 2, null, 3, 3]);
console.log("BiTree p3 = " + isSymmetric2(p3));
// true
//     1
//    / \
//   2   2
//    \ /  
//    33

let p4 = Tree.createBiTree([1, 2, 2]);
console.log("BiTree p4 = " + isSymmetric(p4));
// true
//     1
//    / \
//   2   2

let p5 = Tree.createBiTree([1, 2]);
console.log("BiTree p5 = " + isSymmetric(p5));
// false
//     1
//    / \
//   2 

let p = Tree.createBiTree([1, 0, 0]);
console.log("BiTree p = " + isSymmetric(p));
//  true
//     1

