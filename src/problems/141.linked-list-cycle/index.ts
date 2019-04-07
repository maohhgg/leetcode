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
 * @return {boolean}
 */
let hasCycle = (head: ListNode): boolean => {
    if (!head) return false;
    let fast = head,
        slow = head;
    while (fast.next !== null) {
        fast = fast.next.next;
        if (fast === null) return false;
        slow = slow.next;
        if(slow === fast) return true;
    }
    return false;
};

let list = LinkList.createCycleList([1, 2, 3, 4, 5, 6, 8, 9]);
let list2 = LinkList.createList([1, 2, 3, 4, 5, 6, 8, 9]);
LinkList.printCycleList(list);
console.log(hasCycle(list));
console.log(hasCycle(list2));