const TreeFunction = require("../../Common/Tree/TreeFunction.js");
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
var q = TreeFunction.createBiTree([3,9,20,null,null,15,7]);
console.log(levelOrder(q));