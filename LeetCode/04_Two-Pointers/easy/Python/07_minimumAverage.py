# 3194. Minimum Average of Smallest and Largest Elements

from typing import List

class Solution:
    def minimumAverage(self, nums: List[int]) -> float :
        nums.sort()
        avg = []

        left = 0
        right = len(nums) -1

        while left < right:
            avg.append((nums[left] + nums[right]) / 2)
            left += 1
            right -= 1
        
        return min(avg)


        
nums = [7,8,3,4,15,13,4,1]
# Output: 5.5

# nums = [1,9,8,3,10,5]
# Output: 5.5

# nums = [1,2,3,7,8,9]
# Output: 5.0

sol = Solution()
print(sol.minimumAverage(nums))
