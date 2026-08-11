# 561. Array Partition

from typing import List

class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        maxSum = 0

        for i in range(0, n, 2):
            maxSum = nums[i] + maxSum


        return maxSum

        

# nums = [1,4,3,2]
# Output: 4

nums = [6,2,6,5,1,2]
# Output: 9


sol = Solution()
print(sol.arrayPairSum(nums))