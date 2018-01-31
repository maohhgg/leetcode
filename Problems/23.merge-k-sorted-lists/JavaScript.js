const List = require("../../Common/LinkList/LinkListFunction.js");
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
/*
 mergeKLists 现在的方法是O(N)
 mergeTwoLists O(KN)
 //  Time Limit Exceeded
var mergeKLists = function (lists) {
    if (lists === null || lists.length === 0) return null;

    if (lists.length > 1) {
        var list;
        while (lists.length !== 1) {
            lists.push(mergeTwoLists(lists.shift(), lists.pop()));
        }
    }
    if (lists.length === 1) {
        var l = lists.pop();
        if(!l)  return [];
        return l;
    };
};
*/
var mergeKLists = function (lists) {
    if (lists === null || lists.length === 0) return null;

    if (lists.length === 1) return lists.pop();

    var length = lists.length;
    var mid = (length - 1) / 2;
    var l1 = mergeKLists(lists.slice(0, mid + 1));
    var l2 = mergeKLists(lists.slice(mid + 1, length));

    return mergeTwoLists(l1, l2);
};
// 21.Merge Two Sorted Lists
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    var m;
    if (l1.val <= l2.val) {
        m = l1.val;
        l1 = l1.next;
    } else {
        m = l2.val;
        l2 = l2.next;
    }

    var list = new ListNode(m)
    list.next = mergeTwoLists(l1, l2);
    return list;
};

var ListNode = function (val) {
    return List.createLinkNode(val);
}
let lists = [
    List.createList([0, 1, 2, 3]), 
    List.createList([3, 7, 8, 9]), 
    List.createList([5, 9, 10, 12]), 
    List.createList([8, 9, 20, 100]), 
];
// let lists = [
//     List.createList([]),
//     List.createList([]),
// ];
// console.log(mergeKLists(lists));
List.printList(mergeKLists(lists));