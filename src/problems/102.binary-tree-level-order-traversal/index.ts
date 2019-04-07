import {TreeNode,Tree} from "../../common/tree";
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
let levelOrder = (root: TreeNode): number[][] => {
    if(!root) return [];
    let queue:TreeNode[] = [],number:number[][] = [];
    let tmp: TreeNode[],res: number[];
    queue.push(root);

    while(queue.length){
        res = [];tmp = [];
        queue.forEach((item) => {
            res.push(item.val);

            if(item.left) tmp.push(item.left);
            if(item.right) tmp.push(item.right);
        });
        queue = tmp;
        number.push(res);
    }
    return number;
};
let q = Tree.createBiTree([3,9,20,null,null,15,7]);
console.log(levelOrder(q));