const List = require("../../Common/LinkList/LinkListFunction.js");

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
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    
    var m;
    if(l1.val <= l2.val){
        m = l1.val; l1 = l1.next;
    } else {
        m = l2.val; l2 = l2.next;
    }
    
    var list = new ListNode(m)
    list.next = mergeTwoLists(l1,l2);
    return list;
};

var ListNode = function (val) {
    return List.createLinkNode(val);
}
let list1 = List.createList([]);
let list2 = List.createList([]);

List.printList(mergeTwoLists(list1,list2));