# 3689. Maximum Total Subarray Value I

from typing import List

class Solution:
    def maxTotalValue(self, nums: List[int], k: int) -> int:
        
        maxNum = max(nums)
        minNum = min(nums)

        val = maxNum - minNum

        return val * k


# nums = [1,3,2]
# k = 2
# Output: 4        

nums = [4,2,5,1]
k = 3
# Output: 12

sol = Solution()
print(sol.maxTotalValue(nums, k))
