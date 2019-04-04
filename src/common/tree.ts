interface node {
    val: number
    left: node
    right: node
}

class TreeNode implements node {

    val: number; left: node;
    right: node;

    constructor(value: number) {
        this.val = value
        this.left = this.right = null
    }
}

class Tree {
    static result: number[] = [];
    static depth: number = 0;

    static createNode = (num: number): node => {
        return new TreeNode(num);
    }

    static createBiTree = (nums: number[]): node => {
        return Tree._createBiTree(nums, 0);
    }

    static _createBiTree = (nums: number[], depth: number): node => {
        let p: node = null;

        if (depth < nums.length && nums[depth] != null) {
            p = new TreeNode(nums[depth]);
            p.left = Tree._createBiTree(nums, 2 * depth + 1);
            p.right = Tree._createBiTree(nums, 2 * depth + 2);
        }

        return p;
    }

    static traverse = (root: node, orderBy: string = 'pre') => {
        Tree.result = [];
        switch (orderBy) {
            case 'pre':
                Tree.preOrderTraverse(root);
                break;
            case 'in':
                Tree.inOrderTraverse(root);
                break;
            case 'last':
                Tree.lastOrderTraverse(root);
                break;
            default:
                break;
        }
        return Tree.result;
    }

    static preOrderTraverse = (root: node) => {
        if (root) {
            Tree.result.push(root.val);
            Tree.preOrderTraverse(root.left);
            Tree.preOrderTraverse(root.right);
        }
    }
    static inOrderTraverse = (root: node) => {
        if (root) {
            Tree.inOrderTraverse(root.left);
            Tree.result.push(root.val);
            Tree.inOrderTraverse(root.right);
        }
    }
    static lastOrderTraverse = (root: node) => {
        if (root) {
            Tree.lastOrderTraverse(root.left);
            Tree.lastOrderTraverse(root.right);
            Tree.result.push(root.val);
        }
    }

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
        if ((root.left == null) && (root.right == null)) return 1
        return Tree.countLeaf(root.left) + Tree.countLeaf(root.right)
    };


    static logTree = (root: node) => {
        let treeArray: Array<number[]> = Tree._zigzagLevelTraverse(root)
        Tree.depth = Tree.countDepth(root);
        treeArray.forEach(array => console.log(array))
    }


    static _zigzagLevelTraverse = (root: node): Array<number[]> => {
        if (!root) return [];
        let dep = Tree.countDepth(root);
        let queue: Array<node> = []
        let tmp: Array<node> = []

        let number: Array<number[]> = []
        let res: Array<number> = []

        queue.push(root);

        while(dep > 0){
            console.log(dep);
            res = []; tmp = []

            for (var i = 0; i < queue.length; i++) {
                let element: node = queue[i];
                if (element === null) {
                    res.push(null);
                    tmp.push(null);
                    tmp.push(null);
                    continue;
                }
                res.push(element.val);
                tmp.push(element.left);
                tmp.push(element.right);
            }

            queue = tmp;
            number.push(res);
            dep--;
        }

        return number;
    }
}

export { Tree, node }
