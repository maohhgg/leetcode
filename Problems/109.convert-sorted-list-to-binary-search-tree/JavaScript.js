const Tree = require("../../Common/Tree/TreeFunction.js")
const List = require("../../Common/LinkList/LinkListFunction.js");
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    var queue = [];
    while (head) {
        queue.push(head.val);
        head = head.next;
    }
    return dfs(queue, 0, queue.length - 1);
};
var dfs = function (nums, start, end) {
    if (start > end)
        return null;
    var mid = (start + end) >> 1;
    var node = new TreeNode(nums[mid]);
    node.left = dfs(nums, start, mid - 1);
    node.right = dfs(nums, mid + 1, end);

    return node;
};

var TreeNode = function (val) {
    return new Tree.createTreeNode(val);
}

let list = List.createList([1, 2, 3, 4, 5, 6]);
var q = sortedListToBST(list);
Tree.logTree(q);