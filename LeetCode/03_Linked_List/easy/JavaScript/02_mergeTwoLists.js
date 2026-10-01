// 21. Merge Two Sorted Lists

//  Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode()
        let curr = dummy

        while(list1 !== null && list2 !== null){
            if(list1.val <= list2.val){
                curr.next = list1
                list1 = list1.next
            }
            else {
                curr.next = list2
                list2 = list2.next
            }

            curr = curr.next
        }

        if(list1 !== null){
            curr.next = list1
        } else {
            curr.next = list2
        }

        return dummy.next;
    }
}

let list1 = new ListNode(1);
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

let list2 = new ListNode(1);
list2.next = new ListNode(3)
list2.next.next = new ListNode(5)

let sol = new Solution()
let result = sol.mergeTwoLists(list1, list2)
console.log(result.val);

