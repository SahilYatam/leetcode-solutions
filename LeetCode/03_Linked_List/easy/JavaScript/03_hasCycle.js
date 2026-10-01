// 141. Linked List Cycle

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    if(head == null || head.next === null){
        return false
    }
    let slowPtr = head, fastPtr = head;
    while(
        slowPtr !== null && 
        fastPtr !== null && 
        fastPtr.next !== null
    ){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;

        if(slowPtr === fastPtr){
            return true;
        }
    }

    return false
};

let head = new ListNode(3);

let node2 = new ListNode(2);
let node0 = new ListNode(0);
let node4 = new ListNode(-4);

head.next = node2;
node2.next = node0;
node0.next = node4;

// Create cycle: -4 → 2
node4.next = node2;

console.log(hasCycle(head)); // true
