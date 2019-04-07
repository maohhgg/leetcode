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
 * @param {number} x
 * @return {ListNode}
 */
let partition = (head: ListNode, x: number): ListNode => {
    let l = null,
        m = null,
        ll = null,
        lm = null;
    while (head) {
        if (head.val < x) {
            if (l) {
                l.next = head;
                l = l.next;
            } else ll = l = head;
        } else {
            if (m) {
                m.next = head;
                m = m.next;
            } else lm = m = head;
        }
        head = head.next;
    }
    if (m) m.next = null;
    if (l) l.next = lm;
    return ll ? ll : lm;
};

// let list = List.createList([0, 4, 5, 3, 3, 4, 1, 2]);
let list = LinkList.createList([1]);
LinkList.printList(partition(list, 0));