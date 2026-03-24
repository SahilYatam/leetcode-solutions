# 643. Maximum Average Subarray I

from typing import List

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        currentSum = 0
        left = 0
        right = k

        for i in range(k):
            currentSum += nums[i]

        maxSum = currentSum

        while right < len(nums):
            currentSum = currentSum - nums[left]
            currentSum = currentSum + nums[right]

            maxSum = max(maxSum, currentSum)

            left+=1
            right+=1

        return maxSum/k


# nums = [1,12,-5,-6,50,3]
# k = 4
# Output: 12.75000
# Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75


nums = [5]
k = 1
# Output: 5.00000

sol = Solution()
print(sol.findMaxAverage(nums, k))