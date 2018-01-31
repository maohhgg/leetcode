const tree = require("../../Common/Tree/TreeFunction.js")
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
var averageOfLevels = function(root) {
    var arr = levelOrder(root);
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if(typeof element === 'object'){
            arr[i] = averageArray(element);
        }
    }
    return arr;
};
var averageArray = function(arr) {
    var sum = 0;
    arr.forEach(function(element) {
        sum += element;
    }, this);
    return parseFloat(sum / arr.length);
};

// 102. Binary Tree Level Order Traversal 
var levelOrder = function(root) {
    if(!root) return [];
    var queue = [],number = [];
    queue.push(root);

    while(queue.length){
        var res = [],tmp = [];
        queue.forEach(function(element) {
            res.push(element.val);
            if(element.left){
                tmp.push(element.left);
            }
            if(element.right){
                tmp.push(element.right);
            }
        }, this);
        queue = tmp;
        number.push(res);
    }
    return number;
};

var p = tree.createBiTree([1, 3, 2, 5]);
var p1 = tree.createBiTree([3, 9, 20, null, null, 15, 7]);
var q = tree.createBiTree([2, 1, 3, null, 4, null, 7]);

console.log(averageOfLevels(p));
console.log(averageOfLevels(p1));
console.log(averageOfLevels(q));