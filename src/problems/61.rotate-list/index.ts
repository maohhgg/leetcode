import {ListNode, LinkList} from "../../common/linklist";
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let rotateRight = (head: ListNode, k: number): ListNode => {
    if (head == null || k == 0) return head;
    
    let len = 1, list = head;
    while (list.next) {
        len++;
        list = list.next;
    }
    
    k = len - k % len;
    list.next = head;
    
    while (k-- > 0) list = list.next;

    head = list.next;
    list.next = null;

    return head;
};

let list = LinkList.createList([0, 1, 2, 3, 4, 5, 6]);
LinkList.printList(rotateRight(list, 10));