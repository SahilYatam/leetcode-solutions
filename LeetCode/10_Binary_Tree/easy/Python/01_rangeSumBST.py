# 938. Range Sum of BST
from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        if root == None:
            return 0
        
        if root.val < low:
            return self.rangeSumBST(root.right, low, high)

        if root.val > high:
            return self.rangeSumBST(root.left, low, high)

        return (
            root.val
            + self.rangeSumBST(root.left, low, high)
            + self.rangeSumBST(root.right, low, high)
        )
        

root = TreeNode(10)
root.left = TreeNode(5)
root.right = TreeNode(15)
root.left.left = TreeNode(3)
root.left.right = TreeNode(7)
root.right.right = TreeNode(18)
low = 7
high = 15
# Output: 32

# root = [10,5,15,3,7,13,18,1,None,6]
# low = 6
# high = 10
# Output: 23


sol = Solution()
print(sol.rangeSumBST(root, low, high))