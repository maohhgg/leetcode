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
var detectCycle = function (head) {
    if (!head) return null;
    var fast = head,
        slow = head;
    while (fast.next !== null) {
        fast = fast.next.next;
        if (fast === null) return null;
        slow = slow.next;
        if (slow === fast) {
            var p = head;
            var q = fast;
            while (p !== q) {
                p = p.next;
                q = q.next;
            }
            return p;
        }
    }
    return null;
};

let list = List.createCycleList([1, 2, 3, 4, 5, 6, 8, 9]);
let list2 = List.createList([12, 22, 13, 4, 5, 6, 8, 9]);

List.printCycleList(list);
List.printList(list2);
console.log("Cycle list: " + detectCycle(list));
console.log("list2: " + detectCycle(list2));