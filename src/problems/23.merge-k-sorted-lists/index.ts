import {ListNode,LinkList} from "../../common/linklist";
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists =  (lists: ListNode[]): ListNode => {

    if (lists === null || lists.length === 0) return null;
    if (lists.length === 1) return lists.pop();

    let len = lists.length;
    let mid = (len - 1) >> 1;
    let l1 = mergeKLists(lists.slice(0, mid + 1));
    let l2 = mergeKLists(lists.slice(mid + 1, len));

    return mergeTwoLists(l1, l2);
};

// 21.merge-two-sorted-lists
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


let lists = [
    LinkList.createList([0, 1, 2, 3]),
    LinkList.createList([3, 7, 8, 9]),
    LinkList.createList([5, 9, 10, 12]),
    LinkList.createList([8, 9, 20, 100]),
];
LinkList.printList(mergeKLists(lists));