const TreeFunction = require("../../Tree/TreeFunction.js");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root){
        var a = [].concat(_treepath(root.left,root.val), _treepath(root.right,root.val));
        return a.length === 0 ? [root.val+""] : a; 
    }else 
        return [];
};
var _treepath = function(root,str){
    if(root === null) {
        return [];
    } else {
        if( (root.left == null) && (root.right == null) ) {  
            return str+"->"+root.val;  
        } else {  
            str += "->"+root.val;
            return [].concat(_treepath(root.left,str), _treepath(root.right,str));  
        }  
    }
}
var p = TreeFunction.createBiTree([1,2,3,null,5,null,null,null,null,10,11]);
var p1 = TreeFunction.createBiTree([1]);
// TreeFunction.logTree(p);
console.log(binaryTreePaths(p));
console.log(binaryTreePaths(p1));