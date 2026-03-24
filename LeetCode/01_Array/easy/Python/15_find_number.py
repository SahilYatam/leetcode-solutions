# 448. Find All Numbers Disappeared in an Array

from typing import List

# class Solution:
#     def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
#         lookup = {}
#         result = []
#         for i in range(0, len(nums)):
#             lookup[nums[i]] = i
            
#         for i in range(1, len(nums)+1):
#             if i not in lookup:
#                 result.append(i)

#         return result

class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = []

        # Mark seen numbers
        for i in range(n):
            index = abs(nums[i]) - 1
            if nums[index] > 0:
                nums[index] = -nums[index]
        
        # Collect missing numbers
        for i in range(n):
            if nums[i] > 0:
                result.append(i + 1)

        return result
    
nums = [4,3,2,7,8,2,3,1]
# Output: [5,6]

# nums = [1,1]
# Output: [2]


sol = Solution()
print(sol.findDisappearedNumbers(nums))
