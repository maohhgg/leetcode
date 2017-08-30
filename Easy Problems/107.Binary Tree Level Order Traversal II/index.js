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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return [];
    var queue = [], number = [];
    queue.push(root);

    while(queue.length) {
        var res = [],tmp = [];

        queue.forEach(function(element) {
            res.push(element.val)
            if(element.left){
                tmp.push(element.left)
            }
            if(element.right){
                tmp.push(element.right)
            }
        }, this);
        number.unshift(res);
        queue = tmp;
    }
    return number;
}; 


// var p = TreeFunction.createBiTree([6,2,8,1,4,null,null,null,null,3]);
var p1 = TreeFunction.createBiTree([3,9,20,null,null,15,7]);
// var p1 = TreeFunction.createBiTree([3]);
// var pl = levelOrderBottom(p);
var p1l = levelOrderBottom(p1);
// ConsoleX.dump(pl);
console.log(p1l);
