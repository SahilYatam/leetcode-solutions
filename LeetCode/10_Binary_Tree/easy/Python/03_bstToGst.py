# 1038. Binary Search Tree to Greater Sum Tree

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def bstToGst(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        self.sum_so_far = 0

        def dfs(node):
            if node is None:
                return
            
            dfs(node.right)

            self.sum_so_far += node.val
            node.val = self.sum_so_far

            dfs(node.left)

        dfs(root)

        return root

root = TreeNode(4)
root.left = TreeNode(1)
root.right = TreeNode(6)
root.left.left = TreeNode(0)
root.left.right = TreeNode(2)
root.left.right.right = TreeNode(3)
root.right.left = TreeNode(5)
root.right.right = TreeNode(7)
root.right.right.right = TreeNode(8)

# Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

sol = Solution()
print(sol.bstToGst(root))