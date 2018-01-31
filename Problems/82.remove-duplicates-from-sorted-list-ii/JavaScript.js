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

    var p = head.next;

    if (p.val != head.val) {
        head.next = deleteDuplicates(p);
        return head;
    } else {
        while (p && p.val === head.val) p = p.next;
        return deleteDuplicates(p);
    }
};

let list = List.createList([0, 1, 2, 3, 3, 4, 5, 5]);
List.printList(deleteDuplicates(list));