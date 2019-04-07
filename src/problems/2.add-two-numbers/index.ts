import {ListNode,LinkList} from '../../common/linklist'
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
let addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
    return addNumbers(l1,l2,0);
};
let addNumbers = (l1: ListNode, l2: ListNode, n: number) => {
    if (l1 === null && l2 === null) return n === 0 ? null : new ListNode(n);
    if (l1 === null) l1 = new ListNode(0);
    if (l2 === null) l2 = new ListNode(0);

    let s:number = l1.val + l2.val + n;
    let c = new ListNode(s % 10);
    c.next = addNumbers(l1.next, l2.next, Math.floor(s / 10) );
    return c;
};


// 59821 + 399  =  60220
let l1 = LinkList.createList([9, 9, 3]);   
let l2 = LinkList.createList([1, 2, 8, 9, 5]);
let l = addTwoNumbers(l1, l2);
LinkList.printList(l);