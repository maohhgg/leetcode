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
let zigzagLevelOrder = (root:TreeNode):number[][] => {
    if(!root) return [];
    let queue:TreeNode[] = [],number:number[][] = [],a = 0;
    let tmp: TreeNode[],res: number[];
    queue.push(root);

    while(queue.length){
        res = [];tmp = [];
        queue.forEach((item) => {
            res.push(item.val);
            if(item.left) tmp.push(item.left);
            if(item.right) tmp.push(item.right);
        });

        if(a % 2) res.reverse();
        a++;
        queue = tmp;
        number.push(res);
    }
    return number;
};
let q = Tree.createBiTree([3,9,20,null,null,15,7]);
console.log(zigzagLevelOrder(q));