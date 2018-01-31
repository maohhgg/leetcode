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
var rotateRight = function (head, k) {
    if (head == null || k == 0)
        return head;
    var len = 1,list = head;
    while (list.next) {
        len++;
        list = list.next;
    }
    k = len - k % len;
    list.next = head;
    for (var i = 0; i < k; i++) {
        list = list.next;
    }
    head = list.next;
    list.next = null;
    return head;
};

let list = List.createList([0, 1, 2, 3, 4, 5, 6]);
List.printList(rotateRight(list, 10));