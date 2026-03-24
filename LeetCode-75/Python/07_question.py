'''
Dificulty: Medium
334. Increasing Triplet Subsequence
'''
from typing import List
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        first = float("inf")
        second = float("inf")

        for num in nums:
            if num < first:
                first = num
            elif num > first and num < second:
                second = num
            elif num > second:
                return True
        
        return False

# nums = [1,2,3,4,5]
# Output: true

# nums = [5,4,3,2,1]
# Output: false

# nums = [2,1,5,0,4,6]
# Output: true

nums = [0,4,2,1,0,-1,-3]
# Output: false


sol = Solution()
print(sol.increasingTriplet(nums))

