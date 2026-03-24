'''
LeetCode question: 283. Move Zeroes
'''

from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]):
        k = 0

        for i in range(len(nums)):
            if nums[i] != 0:
                nums[k] = nums[i]
                k += 1
        
        for i in range(k, len(nums)):
            print("k:", k)
            nums[i] = 0
        
        return nums



nums = [0,1,0,3,12]
sol = Solution()
print(sol.moveZeroes(nums))