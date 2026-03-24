'''
268. Missing Number
'''

from typing import List

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        my_set = set(nums)

        for i in range(len(nums) + 1):
            if i not in my_set:
                return i

        return len(nums)

nums = [0,1]
sol = Solution()
print(sol.missingNumber(nums))