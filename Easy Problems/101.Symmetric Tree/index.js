const TreeFunction = require("../../Tree/TreeFunction.js")
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
var isSymmetric = function(root) {
    if(root === null) return true;
    // 判断是否初始节点一定有左右孩子
    if(root.left == null && root.right == null) {
        return true;
    } else if(root.left !== root.right && root.left== null || root.right== null) {
        return false;
    }

    var queue1 = [];
    var queue2 = [];

    // 分别对左右孩子用前序和后序遍历  结果相等及左右对称
    leftTree(root.left,queue1);
    rightTree(root.right,queue2);
    if(queue1.length !== queue2.length) return false;
    while(queue1.length && queue2.length){
        var valL = queue1.pop();
        var valR = queue2.pop();
        if(valL !== valR){
            return false;
        }
    }

    return queue1.length === queue2.length;
};
var leftTree = function(root,queue) {
    if(root){
        queue.push(root.val);
        leftTree(root.left,queue);
        leftTree(root.right,queue);
    } else {
        queue.push("*");
    }
};
var rightTree = function(root,queue){
    if(root){
        queue.push(root.val);
        rightTree(root.right,queue);
        rightTree(root.left,queue);
    } else {
        queue.push("*");
    }
};




var p1 = TreeFunction.createBiTree([1,2,2,3,4,4,3]);
console.log("BiTree p1 = "+isSymmetric(p1));
//  true
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

var p2 = TreeFunction.createBiTree([1,2,2,null,3,null,3]);
console.log("BiTree p2 = "+isSymmetric(p2));
// false
//     1
//    / \
//   2   2
//    \   \
//    3    3

var p3 = TreeFunction.createBiTree([1,2,2,null,3,3]);
console.log("BiTree p3 = "+isSymmetric(p3));
// true
//     1
//    / \
//   2   2
//    \ /  
//    33

var p4 = TreeFunction.createBiTree([1,2,2]);
console.log("BiTree p4 = "+isSymmetric(p4));
// true
//     1
//    / \
//   2   2

var p5 = TreeFunction.createBiTree([1,2]);
console.log("BiTree p5 = "+isSymmetric(p5));
// false
//     1
//    / \
//   2 

var p = TreeFunction.createBinaryTree([1,0,0]);
console.log("BiTree p = "+isSymmetric(p));
//  true
//     1

