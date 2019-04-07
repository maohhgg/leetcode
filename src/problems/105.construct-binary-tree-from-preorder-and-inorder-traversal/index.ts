import {TreeNode, Tree} from "../../common/tree";
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preOrder
 * @param {number[]} inOrder
 * @return {TreeNode}
 */
let buildTree = (preOrder: number[], inOrder: number[]): TreeNode => {
    if (preOrder.length != inOrder.length) return null;
    return buildHelper(0, 0, inOrder.length - 1, preOrder, inOrder)
};

let buildHelper = (preStart: number, inStart: number, inEnd: number, preOrder: number[], inOrder: number[]): TreeNode => {
    if (preStart > preOrder.length - 1 || inStart > inEnd) return null;

    let root = new TreeNode(preOrder[preStart]);
    let index = 0;

    for (let i = inStart; i <= inEnd; i++) {
        if (inOrder[i] == root.val) index = i;
    }

    root.left = buildHelper(preStart + 1, inStart, index - 1, preOrder, inOrder);
    root.right = buildHelper(preStart + index - inStart + 1, index + 1, inEnd, preOrder, inOrder);
    return root;
};


let p = buildTree([3,9,20,15,7], [9,3,15,20,7]);
Tree.logTree(p);
