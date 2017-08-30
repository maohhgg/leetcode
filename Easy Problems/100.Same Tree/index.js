const TreeFunction = require("../../Tree/TreeFunction.js")
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




var p = TreeFunction.createBiTree([1,2,3,4]);
var q1 = TreeFunction.createBiTree([1,2,3,4]); // true
var q2 = p; // true
var q3 = TreeFunction.createBiTree([6,2,8,1,4,null,null,null,null,3]); // false
console.log("p === q1 "+isSameTree(p,q1));
console.log("p === q2 "+isSameTree(p,q2));
console.log("p === q3 "+isSameTree(p,q3));