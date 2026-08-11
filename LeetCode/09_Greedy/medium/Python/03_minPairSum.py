# 1877. Minimize Maximum Pair Sum in Array

from typing import List

class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        nums.sort()
        maxNum = 0

        low = 0
        high = len(nums) -1

        while low < high:
            currMaxNum = nums[low] + nums[high]
            maxNum = max(currMaxNum, maxNum)

            low += 1
            high -= 1

        
        return maxNum



# nums = [3,5,2,3]
# Output: 7

nums = [3,5,4,2,4,6]
# Output: 8

sol = Solution()
print(sol.minPairSum(nums))