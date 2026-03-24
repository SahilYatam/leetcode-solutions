# 2760. Longest Even Odd Subarray With Threshold

from typing import List

class Solution:
    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:
        currentLen = 0
        maxLen = 0

        for i in range(len(nums)):
            if nums[i] > threshold:
                currentLen = 0
            elif currentLen > 0 and nums[i] % 2 != nums[i - 1] % 2:
                currentLen += 1
            elif nums[i] % 2 == 0:
                currentLen = 1
            else:
                currentLen = 0
            maxLen = max(maxLen, currentLen)
            

        return maxLen

# nums = [3,2,5,4]
# threshold = 5
# Output: 3

# nums = [1,2]
# threshold = 2
# Output: 1

nums = [2,3,4,5]
threshold = 4
# Output: 3

sol = Solution()
print(sol.longestAlternatingSubarray(nums, threshold))