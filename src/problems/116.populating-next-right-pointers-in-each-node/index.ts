import {Node, PerfectTree} from "../../common/perfect-tree";
import {Tree, TreeNode} from "../../common/tree";
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root: Node): Node => {
    if (!root) return null;
    if (root.left) root.left.next = root.right;
    if (root.right && root.next) root.right.next = root.next.left;
    connect(root.left);
    connect(root.right);
    return root;
};

let t: TreeNode = PerfectTree.createBiTree([1, 2, 3, 4, 5, 6, 7]);
let n: Node = connect(PerfectTree.BiTreeToNode(t));
Tree.logTree(n);
PerfectTree.logTree(n);
