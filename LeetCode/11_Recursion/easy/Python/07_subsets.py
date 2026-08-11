# 78. Subsets

from typing import List

class Solution:
    def getAllSubsets(self, nums: List[int], ans: List[int], i: int, allSubsets: List[List[int]]):
        if i == len(nums):
            allSubsets.append(list(ans))
            return

        # include
        ans.append(nums[i])
        self.getAllSubsets(nums, ans, i+1, allSubsets)

        # exclude
        ans.pop()
        self.getAllSubsets(nums, ans, i+1, allSubsets)
        


    def subsets(self, nums: List[int]) -> List[List[int]]:
        allSubsets = []
        ans = []

        self.getAllSubsets(nums, ans, 0, allSubsets)

        return allSubsets
        

nums = [1,2,3]
# Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

# nums = [0]
# Output: [[],[0]]

sol = Solution()
print(sol.subsets(nums))