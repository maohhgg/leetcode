import {LinkList,ListNode} from "../../common/linklist";
import {TreeNode,Tree} from "../../common/tree";
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
let sortedListToBST = (head: ListNode): TreeNode => {
    let queue = [];
    while (head) {
        queue.push(head.val);
        head = head.next;
    }
    return dfs(queue, 0, queue.length - 1);
};
let dfs = (nums:number[], start:number, end:number):TreeNode => {
    if (start > end) return null;

    let mid = Math.ceil(start + ((end - start) / 2));
    let node = new TreeNode(nums[mid]);
    node.left = dfs(nums, start, mid - 1);
    node.right = dfs(nums, mid + 1, end);

    return node;
};


let list = LinkList.createList([-10,-3,0,5,9]);
let q = sortedListToBST(list);
Tree.logTree(q);