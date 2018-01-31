const List = require("../../Common/LinkList/LinkListFunction.js");
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
var reverseKGroup = function (head, k) {
    var curr = head;
    for (var i = 0; i < k; i++) {
        if (!curr) return head;
        curr = curr.next;
    }
    var newHead = reverse(head,curr);
    head.next = reverseKGroup(curr,k)
    return newHead;
};

//  1 -> 2 -> 3 -> 4;    反转不论多长的局部链表 
//  4 -> 3 -> 2 -> 1;    
// 返回新的链表的头部
var reverse = function (start, end) {
    var head = end;
    while (start != end) {
        var tmp = start.next;
        start.next = head;
        head = start;
        start = tmp;
    }
    return head;
};

let list = List.createList([0, 1, 2, 3, 5, 6]);
let list1 = List.createList([0, 1, 2, 3, 5, 6]);
let list2 = List.createList([0, 1, 2, 3, 5, 6]);
let list3 = List.createList([0, 1, 2, 3, 5, 6]);
List.printList(reverseKGroup(list,2));
List.printList(reverseKGroup(list1,3));
List.printList(reverseKGroup(list2,4));
List.printList(reverseKGroup(list3,6));