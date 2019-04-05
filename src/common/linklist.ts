interface node {
    val: number;
    next: node;
}

class ListNode implements node {
    val: number;
    next: node;
    constructor(value: number) {
        this.val = value;
        this.next = null;
    }
}

class LinkList {
    static createNode = (num: number): node => {
        return new ListNode(num);
    };

    static createList = (nums: number[]): node => {
        if (nums.length == 0) return null;

        let p: node = LinkList.createNode(nums.shift());
        p.next = LinkList.createList(nums);

        return p;
    };

    static createCycleList = (nums: number[]): node => {
        let len: number = nums.length - 1;
        let p: node = LinkList.createList(nums);
        let l: node = p;

        for (var i = 0; i < len; i++) {
            p = p.next
        }

        p.next = l;
        return l
    };

    static printList = (head: node) => {
        let s: string = '';
        while (head) {
            s += (head.val + ' -> ');
            head = head.next
        }
        console.log(s.substr(0, s.length - 4))
    };

    static printCycleList = (head: node) => {
        let s: string = '';
        let p = head;
        while (p) {
            s += (p.val + " -> ");
            if (p.next === head) break;
            p = p.next;
        }
        console.log(s + "...")
    };

    static removeNthNode = (head: node, n: number): node => {
        if (!head) return null;
        if (n == 0) return head.next;

        let i = 1,
            list = head,
            next = list.next;
        while (next) {
            if (i === n) {
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
}

export { LinkList, ListNode, node }

