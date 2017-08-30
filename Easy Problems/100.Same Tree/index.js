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
var isSameTree = function(p, q) {
    var queue1 = [];
    var queue2 = [];

    queue1.push(p);
    queue2.push(q);

    while(queue1.length && queue2.length){
        var p = queue1.pop();
        var q = queue2.pop();
        var valP,valQ;

        if(p === null){
            valP = null;
        } else {
            valP = p.val;
            queue1.push(p.left);
            queue1.push(p.right);
        }

        if(q === null){
            valQ = null;
        } else {
            valQ = q.val;
            queue2.push(q.left);
            queue2.push(q.right);
        }

        if(valP !== valQ){
            return false;
        }
    }

    return queue1.length === queue2.length;
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
var p = createBinaryTree([1,2,4,0,0,0,3,0,0]);
// var q = createBinaryTree([1,2,4,0,0,0,3,0,0]);
// var q = p;
var q = createBinaryTree([6,2,1,0,0,4,3,0,0,0,8,0,0]);
preOrderTraverse(p);
preOrderTraverse(q);
console.log(isSameTree(p,q));
