// 143. Reorder List
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
    if(head === null) return null;

    let slow = head, fast = head;    
    

    while(fast !== null && fast.next !== null){
        slow = slow.next; // Move 1 step
        fast = fast.next.next; // Move 2 step
    }

    let second = slow.next;
    slow.next = null;

    let prev = null, curr = second;
    while(curr){
        let nxt = curr.next;
        curr.next = prev;

        prev = curr;
        curr = nxt;
    }

    let first = head;
    let secondHalf = prev;

    while(secondHalf !== null){
        let firstNext = first.next;
        let secondNext = secondHalf.next;

        first.next = secondHalf;
        secondHalf.next = firstNext;

        first = firstNext;
        secondHalf = secondNext;
    }
};

let head = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;
