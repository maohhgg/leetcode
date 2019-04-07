import {TreeNode, Tree} from "../../common/tree";
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} postOrder
 * @param {number[]} inOrder
 * @return {TreeNode}
 */
let buildTree = (inOrder: number[], postOrder:number[]): TreeNode => {
    if (postOrder.length != inOrder.length) return null;
    return buildHelper(inOrder.length - 1, 0, inOrder.length - 1, inOrder, postOrder);
};

let buildHelper = (index: number, poStart: number, poEnd: number, inOrder: number[], postOrder: number[]): TreeNode => {
    if (poStart > poEnd) return null;

    let root = new TreeNode(postOrder[index]);
    let pos = inOrder.indexOf(postOrder[index], poStart);

    root.left = buildHelper(index - (poEnd - pos) - 1, poStart, pos - 1, inOrder, postOrder);
    root.right = buildHelper(index - 1, pos + 1, poEnd, inOrder, postOrder);

    return root;
};

let p = buildTree([9,3,15,20,7], [9,15,7,20,3]);
Tree.logTree(p);