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
    static createNode = (value: number): node => {
        return new ListNode(value);
    };

    static createList = (values: number[], cycle:boolean=false): node => {
        if (values.length == 0) return null;

        let len = values.length - 1;
        let p: node = LinkList.createNode(values.shift());
        p.next = LinkList.createList(values);

        if (cycle) {
            let l: node = p;
            for (let i = 0; i < len; i++) {
                p = p.next
            }
            p.next = l;
            return l
        }
        return p;
    };

    static printList = (head: node,cycle:boolean=false) => {
        let s: string = '';
        let p = head;
        while (p) {
            s += (p.val + " -> ");
            if (p.next === head) break;
            p = p.next;
        }
        if(cycle) console.log(s + "...");
        else console.log(s.substr(0, s.length - 4));
    };

    static removeNNode = (head: node, n: number): node => {
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

