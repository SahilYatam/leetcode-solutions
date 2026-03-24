'''
LeetCode question: 136. Single Number
'''
from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        if len(nums) == 1: return nums[0]

        map = {}

        for num in nums:
            if num not in map:
                map[num] = 1
            else:
                map[num] = map.get(num, 0) + 1
        
        for num, count in map.items():
            if count == 1:
                return num
        
        return 0




nums = [2, 2, 1]
sol = Solution()
print(sol.singleNumber(nums))