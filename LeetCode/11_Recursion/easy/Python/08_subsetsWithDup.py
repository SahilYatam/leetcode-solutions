# 90. Subsets II

from typing import List

class Solution:
    def getAllSubsets(self, nums: List[int], ans: List[int], i: int, allSubsets: List[List[int]]):
        if i == len(nums):
            allSubsets.append(list(ans))
            return
        
        # include
        ans.append(nums[i])
        self.getAllSubsets(nums, ans, i+1, allSubsets)

        ans.pop()

        idx = i+1
        while (idx < len(nums) and nums[idx] == nums[idx-1]):
            idx += 1

        self.getAllSubsets(nums, ans, idx, allSubsets)

    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        allSubsets = []
        ans = []

        self.getAllSubsets(nums, ans, 0, allSubsets)

        return allSubsets
    
nums = [1,2,2]
# Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
sol = Solution()
result = sol.subsetsWithDup(nums)

for val in result:
    print(val)

