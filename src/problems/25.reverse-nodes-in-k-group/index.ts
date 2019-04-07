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
 * @param {number} k
 * @return {ListNode}
 */
let reverseKGroup = (head: ListNode, k: number): ListNode => {
    let curr = head;
    for (let i = 0; i < k; i++) {
        if (!curr) return head;
        curr = curr.next;
    }
    let newHead = reverse(head, curr);
    head.next = reverseKGroup(curr, k);
    return newHead;
};

//  1 -> 2 -> 3 -> 4;    反转不论多长的局部链表 
//  4 -> 3 -> 2 -> 1;    
// 返回新的链表的头部
let reverse = function (start, end) {
    let head = end;
    while (start != end) {
        let tmp = start.next;
        start.next = head;
        head = start;
        start = tmp;
    }
    return head;
};

let list = LinkList.createList([0, 1, 2, 3, 5, 6]);
let list1 = LinkList.createList([0, 1, 2, 3, 5, 6]);
let list2 = LinkList.createList([0, 1, 2, 3, 5, 6]);
let list3 = LinkList.createList([0, 1, 2, 3, 5, 6]);
LinkList.printList(reverseKGroup(list, 2));
LinkList.printList(reverseKGroup(list1, 3));
LinkList.printList(reverseKGroup(list2, 4));
LinkList.printList(reverseKGroup(list3, 6));