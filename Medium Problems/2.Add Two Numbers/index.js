const list = require("../../Common/LinkList/LinkListFunction.js");
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
var addTwoNumbers = function (l1, l2) {
    return addNumbers(l1,l2,0);
};
var addNumbers = function (l1, l2, n) {
    if (l1 === null && l2 === null) return n === 0 ? null : new ListNode(n);
    if (l1 === null && l2 !== null) l1 = new ListNode(0);
    if (l2 === null && l1 !== null) l2 = new ListNode(0);

    var s = l1.val + l2.val + n;
    var c = new ListNode(s % 10);
    c.next = addNumbers(l1.next, l2.next, parseInt(s/10));
    return c;
};

var ListNode = function (val) {
    return list.createLinkNode(val);
}
// 59821 + 399  =  60220
var l1 = list.createList([9, 9, 3]);   
var l2 = list.createList([1, 2, 8, 9, 5]);
var l = addTwoNumbers(l1, l2);
list.printList(l);