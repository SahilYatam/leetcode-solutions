# 1984. Minimum Difference Between Highest and Lowest of K Scores

from typing import List

class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        nums.sort()

        left = 0
        right = k - 1

        minDifference = nums[right] - nums[left]
        left+=1
        right+=1

        while right < len(nums):
            currentDifference = nums[right] - nums[left]
            minDifference = min(minDifference, currentDifference)

            left+=1
            right+=1

        return minDifference


nums = [10,1000,30,100,20,300,200]
k = 3
# Output: 20

# nums = [90]
# k = 1
# Output: 0

# nums = [9,4,1,7]
# k = 2
# Output: 2

# Explanation: There are six ways to pick score(s) of two students:
# - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
# - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
# - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
# - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
# - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
# - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
# The minimum possible difference is 2.

sol = Solution()
print(sol.minimumDifference(nums, k))
