# 141. Linked List Cycle
from typing import Optional

class ListNode:
    def __init__(self, x: int):
        self.val = x
        self.next: Optional["ListNode"] = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:

        if not head or not head.next:
            return False
        
        slowPtr = head
        fastPtr = head

        while slowPtr is not None and fastPtr is not None and fastPtr.next is not None:
            slowPtr = slowPtr.next
            fastPtr = fastPtr.next.next

            if slowPtr == fastPtr:
                return True

        return False


head = ListNode(3)

node2 = ListNode(2)
node0 = ListNode(0)
node4 = ListNode(-4)

head.next = node2
node2.next = node0
node0.next = node4

# Create the cycle: -4 → 2
node4.next = node2

sol = Solution()

result = sol.hasCycle(head)

print(result)  # True
