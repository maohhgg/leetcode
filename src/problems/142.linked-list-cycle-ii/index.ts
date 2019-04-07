import {LinkList,ListNode} from "../../common/linklist";
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
let detectCycle = (head: ListNode): ListNode => {
    if (!head) return null;
    let fast = head,
        slow = head;
    while (fast.next !== null) {
        fast = fast.next.next;
        if (fast === null) return null;
        slow = slow.next;
        if (slow === fast) {
            let p = head;
            let q = fast;
            while (p !== q) {
                p = p.next;
                q = q.next;
            }
            return p;
        }
    }
    return null;
};

let list = LinkList.createCycleList([1, 2, 3, 4, 5, 6, 8, 9]);
let list2 = LinkList.createList([12, 22, 13, 4, 5, 6, 8, 9]);

LinkList.printCycleList(list);
console.log(detectCycle(list) ? "head.val is " + detectCycle(list).val : "no cycle");
LinkList.printList(list2);
console.log(detectCycle(list2) ? "head.val is " + detectCycle(list2).val : "no cycle");