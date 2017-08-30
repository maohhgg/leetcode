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



function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var createBinaryTree = function(nums){
    var a = nums.shift();
    if(a == 0){
        var p = null;
    } else {
        var p = new TreeNode();
        p.val = a;
        p.left = createBinaryTree(nums);
        p.right = createBinaryTree(nums);
    }
    return p;
}
var preOrderTraverse = function(root)  {  
    if(root) {  
        console.log(root.val)
        preOrderTraverse(root.left);  
        preOrderTraverse(root.right);  
    }  
}  
// var p = createBinaryTree([1,2,3,0,0,4,0,0,2,4,0,0,3,0,0]);
//  true
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// var p = createBinaryTree([1,2,0,3,0,0,2,0,3,0,0]);
// false
//     1
//    / \
//   2   2
//    \   \
//    3    3

// var p = createBinaryTree([1,2,0,3,0,0,2,3,0,0,0]);
// true
//     1
//    / \
//   2   2
//    \ /  
//    33

// var p = createBinaryTree([1,2,0,0,2,0,0]);
// true
//     1
//    / \
//   2   2

// var p = createBinaryTree([1,2,0,0,0]);
// false
//     1
//    / \
//   2 

var p = createBinaryTree([1,0,0]);
//  true
//     1
preOrderTraverse(p);
console.log(isSymmetric(p));
