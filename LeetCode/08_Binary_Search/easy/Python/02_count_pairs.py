# 2824. Count Pairs Whose Sum is Less than Target

from typing import List

class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        nums.sort()
        left = 0
        right = len(nums) -1
        pairs = 0

        while left < right:

            if nums[left] + nums[right] < target:
                pairs += (right - left)
                left += 1
            else:
                right -= 1
        
        return pairs



# nums = [-1,1,2,3,1]
# target = 2
# Output: 3

# nums = [-6,2,5,-2,-7,-1,3]
# target = -2
# Output: 10

nums = [-6,2,5,-2,-7,-1,3]
target = -2
# Output: 10

sol = Solution()
print(sol.countPairs(nums, target))
