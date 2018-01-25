const TreeNode = require("./TreeNode.js");
this.arr = [];
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
this.createTreeNode = function(num){
    var p = new TreeNode.TreeNode(num);
    p.val = num;
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
this.Order = function (root,method) {
    this.arr = [];
    switch (method) {
        case 'pre':
            this.preOrderTraverse(root);
            break;
        case 'in':
            this.inOrderTraverse(root);
            break;
        case 'last':
            this.lastOrderTraverse(root);
            break;
        default:
            break;
    }
    console.log(this.arr);
}
this.preOrderTraverse = function(root) {  
    if(root) {  
        this.arr.push(root.val);
        this.preOrderTraverse(root.left);  
        this.preOrderTraverse(root.right);  
    }  
}  
this.inOrderTraverse = function(root) {
    if(root) {  
        this.inOrderTraverse(root.left);  
        this.arr.push(root.val);
        this.inOrderTraverse(root.right);  
    }  
}
this.lastOrderTraverse = function(root) {  
    if(root) {  
        this.lastOrderTraverse(root.left);  
        this.lastOrderTraverse(root.right);  
        this.arr.push(root.val);
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

// XXX 优化更好的显示方式
this.logTree = function(root){
    var arr = this._zigzagLevelOrder(root);
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

this._zigzagLevelOrder = function(root){
    if(!root) return [];
    var queue = [],number = [];
    queue.push(root);

    while(queue.length){
        var res = [],tmp = [];
        for (var i = 0; i < queue.length; i++) {
            var element = queue[i];
            if(element === null){
                res.push(element);
                continue;
            }
            res.push(element.val);
            tmp.push(element.left);
            tmp.push(element.right);
        }
        queue = tmp;
        number.push(res);
    }
    number.pop();
    return number;
}