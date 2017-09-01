const list = require("../../Common/LinkList/LinkListFunction.js");
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var list = head,len = 0;
    while(list){
        len++;
        list = list.next;
    }
    return removeNode(head,len-n);
};
var removeNode = function(head, n) {
    if(!head) return null;
    if(n == 0) return head.next;
    
    var i = 1,list = head,next = list.next;
    while(next){
        if(i === n){
            list.next = next.next;
            next = list.next;
            break;
        }
        list = next;
        next = next.next;
        i++;
    }
    return head;
};
var l = list.createList([1]);
list.printList(removeNthFromEnd(l,1));
