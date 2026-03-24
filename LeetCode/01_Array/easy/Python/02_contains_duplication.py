from typing import List
'''
LeetCode question: 217. Contains Duplicate 
'''

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        my_set = set()

        for num in nums:
            if num in my_set:
                return True
            my_set.add(num)
        
        return False
    
nums = [1,2,3,4]
sol = Solution()
print(sol.containsDuplicate(nums))