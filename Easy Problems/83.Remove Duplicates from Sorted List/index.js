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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null || head.next === null)
        return head;

    var p = head,
        q = head.next;

    while (p, q) {
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

let list = List.createList([0, 1, 2, 3, 3, 4, 5, 5]);
List.printList(deleteDuplicates(list));