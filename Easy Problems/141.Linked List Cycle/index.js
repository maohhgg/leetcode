const List = require("../../Common/LinkList/LinkListFunction.js");
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var hasCycle = function (head) {
    if (!head) return false;
    var fast = head,
        slow = head;
    while (fast.next !== null) {
        fast = fast.next.next;
        if (fast === null) return false;
        slow = slow.next;
        if(slow === fast) return true;
    }
    return false;
};

let list = List.createCycleList([1, 2, 3, 4, 5, 6, 8, 9]);

List.printCycleList(list);
console.log(hasCycle(list));