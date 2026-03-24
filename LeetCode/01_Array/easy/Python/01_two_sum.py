from typing import List

'''
  LeetCode question: 1. Two Sum
'''

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        lookup = {}

        for i, num in enumerate(nums):
            complement = target - num

            if complement in lookup:
                return [lookup[complement], i]
            
            lookup[num] = i
        raise ValueError("No two sum solution exists")

nums = [3,2,4]
target = 6

sol = Solution()
print(sol.twoSum(nums, target))
