import {Tree, node} from "./tree";


class Node implements node {
    val: number;
    left: Node;
    right: Node;
    next: Node;

    constructor(value: number) {
        this.val = value;
        this.left = this.right = this.next = null
    }

}

class PerfectTree extends Tree {

    static BiTreeToNode = (root: node): Node => {
        let p: Node;
        p = root.val ? new Node(root.val) : null;
        p.left = root.left ? PerfectTree.BiTreeToNode(root.left) : null;
        p.right = root.right ? PerfectTree.BiTreeToNode(root.right) : null;
        p.next = null;
        return p;
    };

    static NodeToPerfectTree = (root: Node): Node => {
        if (!root) return null;
        if (root.left) root.left.next = root.right;
        if (root.right && root.next) root.right.next = root.next.left;
        PerfectTree.NodeToPerfectTree(root.left);
        PerfectTree.NodeToPerfectTree(root.right);
        return root;
    };

    static logTree = (root: Node) => {
        let treeArray: Array<string[]> = PerfectTree._zigzagTraverse(root);
        treeArray.forEach(array => console.log(array))
    };

    private static _zigzagTraverse = (root: Node): Array<string[]> => {
        if (!root) return [];
        let head: Node = root, curr: Node = root;
        let number: Array<string[]> = [], temp: string[] = [];

        while (curr) {
            temp.push(curr.val.toString());
            temp.push('->');
            if (curr.next) curr = curr.next;
            else {
                temp.push('null');
                curr = head.left;
                head = head.left;
                number.push(temp);
                temp = [];

            }
        }
        return number;
    }
}


export {Node, PerfectTree}