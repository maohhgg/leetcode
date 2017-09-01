const list = require("./LinkList.js");

this.createLinkNode = function (num) {
    var p = new list.ListNode();
    p.val = num;
    p.next = null;
    return p;
}

this.createList = function (nums) {
    var p;
    if (nums.length == 0) {
        p = null;
    } else {
        var a = nums.shift();
        p = this.createLinkNode();
        p.val = a;
        p.next = this.createList(nums);
    }
    return p;
}

this.printList = function (list) {
    var s = "";
    while (list) {
        s += (list.val + " -> ");
        list = list.next;
    }
    console.log(s.substr(0,s.length-4));
}

this.removeNthNode = function (head,n){
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
}