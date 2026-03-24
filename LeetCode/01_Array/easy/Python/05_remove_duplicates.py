'''
LeetCode question: 26. Remove Duplicates from Sorted Array
'''
from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        
        k = 1
        
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[k] = nums[i]
                k += 1

        return k
    

nums = [0,0,1,1,1,2,2,3,3,4]
    
sol = Solution()
print(sol.removeDuplicates(nums))
