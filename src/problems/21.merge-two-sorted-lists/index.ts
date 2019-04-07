import {ListNode, LinkList} from "../../common/linklist";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = (l1: ListNode, l2: ListNode): ListNode => {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    let m:number = 0;
    if (l1.val <= l2.val) {
        m = l1.val;
        l1 = l1.next;
    } else {
        m = l2.val;
        l2 = l2.next;
    }

    let list = new ListNode(m);
    list.next = mergeTwoLists(l1, l2);
    return list;
};

let list1 = LinkList.createList([]);
let list2 = LinkList.createList([]);
LinkList.printList(mergeTwoLists(list1, list2));