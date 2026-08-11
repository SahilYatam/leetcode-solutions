# 3701. Compute Alternating Sum

from typing import List

class Solution:
    def alternatingSum(self, nums: List[int]) -> int:
        sum = 0

        for i in range(len(nums)):
            if i % 2 == 0:
                sum += nums[i]
            else:
                sum -= nums[i]

        return sum

nums = [1,3,5,7]
# Output: -4

# nums = [100]
# Output: 100

sol = Solution()
print(sol.alternatingSum(nums))
