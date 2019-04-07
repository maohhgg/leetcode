import {ListNode,LinkList} from "../../common/linklist";
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

    let p = head,
        q = head.next;

    while (p && q) {
        if (p.val === q.val) {
            p.next = q.next;
            q = p.next;
        } else {
            p = p.next;
            q = q.next;
        }
    }
    return head;
};

let list = LinkList.createList([0, 1, 2, 3, 3, 4, 5, 5]);
LinkList.printList(deleteDuplicates(list));