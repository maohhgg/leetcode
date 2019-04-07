import {ListNode,LinkList} from "../../common/linklist";
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
let removeNthFromEnd = (head:ListNode, n:number): ListNode => {
    let list = head,len = 0;
    while(list){
        len++;
        list = list.next;
    }
    return removeNode(head,len-n);
};
let removeNode = (head:ListNode, n:number): ListNode => {
    if(!head) return null;
    if(n == 0) return head.next;
    
    let i = 1,list = head,next = list.next;
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
let l = LinkList.createList([1,11]);
LinkList.printList(removeNthFromEnd(l,1));
