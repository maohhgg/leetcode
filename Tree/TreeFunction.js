var TreeNode = require("./TreeNode.js");

// 优化 完成
this.createBinaryTree = function(nums){
    var a = nums.shift();
    if(a == 0){
        var p = null;
    } else {
        var p = new TreeNode.TreeNode();
        p.val = a;
        p.left = this.createBinaryTree(nums);
        p.right = this.createBinaryTree(nums);
    }
    return p;
}
this.createBiTree = function(nums){
    return this._createBiTree(nums,0);
}
this._createBiTree = function(nums,n){
    if(n >= nums.length || nums[n] === null){
        var p = null;
    } else {
        var p = new TreeNode.TreeNode();
        p.val = nums[n];
        p.left = this._createBiTree(nums,2*n+1);
        p.right = this._createBiTree(nums,2*n+2);
    }
    return p;
}
this.preOrderTraverse = function(root) {  
    if(root) {  
        console.log(root.val)
        this.preOrderTraverse(root.left);  
        this.preOrderTraverse(root.right);  
    }  
}  
this.inOrderTraverse = function(root) {
    if(root) {  
        this.inOrderTraverse(root.left);  
        console.log(root.val)
        this.inOrderTraverse(root.right);  
    }  
}
this.lastOrderTraverse = function(root) {  
    if(root) {  
        this.lastOrderTraverse(root.left);  
        console.log(root.val)
        this.lastOrderTraverse(root.right);  
    }  
} 
this.maxDepth = function(root) {
    if(root){
        return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
    } else if(root === null){
        return 0;
    }
};

this.nodeNum = function(root) {  
    if(root == null)  {  
        return 0;  
    } else {  
        return (this.nodeNum(root.left)+this.nodeNum(root.right))+1;  
    }  
}
this.leafNum = function(root) {  
    if(root == null) {  
        return 0;  
    } else if( (root.left == null) && (root.right == null) ) {  
        return 1;  
    } else {  
        return (this.leafNum(root.left) + this.leafNum(root.right)) ;  
    }  
}  