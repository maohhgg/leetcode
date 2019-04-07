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
let deleteDuplicates = (head: ListNode): ListNode => {
    if (head === null || head.next === null)
        return head;

    let p = head.next;

    if (p.val != head.val) {
        head.next = deleteDuplicates(p);
        return head;
    } else {
        while (p && p.val === head.val) p = p.next;
        return deleteDuplicates(p);
    }
};

let list = LinkList.createList([0, 1, 2, 3, 3, 4, 5, 5]);
LinkList.printList(deleteDuplicates(list));