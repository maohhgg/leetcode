import {LinkList, ListNode} from "../../common/linklist";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let swapPairs = (head: ListNode): ListNode => {
    if (head === null) return null;
    if (head.next === null) return head;

    let t = head.next;
    head.next = swapPairs(t.next);
    t.next = head;

    return t;
};

let list = LinkList.createList([0, 1, 2, 3, 5]);
LinkList.printList(swapPairs(list));