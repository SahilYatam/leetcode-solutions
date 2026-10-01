// 206. Reverse Linked List

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    let prev = null, curr = head;

    while(curr !== null){
        let nxt = curr.next;
        curr.next = prev;

        prev = curr;
        curr = nxt;
    }
    
    return prev;
};

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
// let head = [1,2]
// Output: [2,1]

console.log(reverseList(head))