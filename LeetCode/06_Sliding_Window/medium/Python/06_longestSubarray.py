# 1493. Longest Subarray of 1's After Deleting One Element

from typing import List

class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        zeroCount = 0
        left = 0
        answer = 0

        for right in range(n):
            if nums[right] == 0:
                zeroCount += 1

            while zeroCount > 1:
                if nums[left] == 0:
                    zeroCount -= 1
                left += 1
            
            answer = max(answer, right - left)

        return answer

# nums = [1,1,0,1]
# Output: 3

nums = [0,1,1,1,0,1,1,0,1]
# Output: 5

# nums = [1,1,1]
# Output: 2

sol = Solution()
print(sol.longestSubarray(nums))