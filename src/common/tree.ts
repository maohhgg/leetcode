interface node {
    val: number
    left: node
    right: node
}

class TreeNode implements node {

    val: number;
    left: node;
    right: node;

    constructor(value: number) {
        this.val = value;
        this.left = this.right = null
    }
}

class Tree {
    static result: number[] = [];
    static readonly IN:number = 0;
    static readonly PRE:number = 1;
    static readonly LAST:number = 2;

    static createNode = (value: number): node => {
        return new TreeNode(value);
    };

    static createBiTree = (values: number[]): node => {
        return Tree._createBiTree(values, 0);
    };

    static traverse = (root: node, order: number = Tree.PRE) => {
        Tree.result = [];
        switch (order) {
            case Tree.PRE:
                Tree._preOrderTraverse(root);
                break;
            case Tree.IN:
                Tree._inOrderTraverse(root);
                break;
            case Tree.LAST:
                Tree._lastOrderTraverse(root);
                break;
            default:
                break;
        }
        return Tree.result;
    };

    static countDepth = (root: node): number => {
        if (root === null) return 0;
        return Math.max(Tree.countDepth(root.left), Tree.countDepth(root.right)) + 1;
    };

    static countNode = (root: node): number => {
        if (root == null) return 0;
        return Tree.countNode(root.left) + Tree.countNode(root.right) + 1;
    };

    static countLeaf = (root: node): number => {
        if (root == null) return 0;
        if ((root.left == null) && (root.right == null)) return 1;
        return Tree.countLeaf(root.left) + Tree.countLeaf(root.right)
    };


    static logTree = (root: node) => {
        Tree._zigzagLevelTraverse(root).forEach(a => console.log(a))
    };

    static tableTree = (root: node) => {
        console.table(Tree._zigzagLevelTraverse(root, true));
    };

    private static _createBiTree = (nums: number[], depth: number): node => {
        let p: node = null;

        if (depth < nums.length && nums[depth] != null) {
            p = new TreeNode(nums[depth]);
            p.left = Tree._createBiTree(nums, 2 * depth + 1);
            p.right = Tree._createBiTree(nums, 2 * depth + 2);
        }

        return p;
    };

    private static _preOrderTraverse = (root: node) => {
        if (root) {
            Tree.result.push(root.val);
            Tree._preOrderTraverse(root.left);
            Tree._preOrderTraverse(root.right);
        }
    };
    private static _inOrderTraverse = (root: node) => {
        if (root) {
            Tree._inOrderTraverse(root.left);
            Tree.result.push(root.val);
            Tree._inOrderTraverse(root.right);
        }
    };
    private static _lastOrderTraverse = (root: node) => {
        if (root) {
            Tree._lastOrderTraverse(root.left);
            Tree._lastOrderTraverse(root.right);
            Tree.result.push(root.val);
        }
    };

    private static _zigzagLevelTraverse = (root: node, structure: boolean = false): Array<any[]> => {
        if (!root) return [];
        let queue: Array<node> = [], tmp: Array<node> = [];
        let number: Array<any[]> = [], res: any[];

        queue.push(root);

        for (let i = Tree.countDepth(root); i > 0; i--) {
            res = [];
            tmp = [];

            for (let j = 0; j < queue.length; j++) {
                let e: node = queue[j], v = null;

                if (e === null) tmp = tmp.concat([null, null]);
                else {
                    v = e.val;
                    tmp = tmp.concat([e.left, e.right]);
                }
                if (structure) res[((2 ** (i - 1)) - 1) + (j * (2 ** i))] = v;
                else res.push(v);
            }

            queue = tmp;
            number.push(res);
        }

        return number;
    }
}

export {Tree, TreeNode, node}
