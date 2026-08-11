# 1827. Minimum Operations to Make the Array Increasing

from typing import List


# class Solution:
#     def minOperations(self, nums: List[int]) -> int:
#         countOps = 0
        
#         for i in range(len(nums) -1):
#             if nums[i] - nums[i+1] != 1:
#                 nums[i] += 1
#                 countOps += 1
            
#         return countOps
        
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        minOps = 0
        
        for i in range(1, len(nums)):
            if nums[i] <= nums[i-1]:
                required = nums[i-1] + 1
                # “This line counts how many +1 pushes are needed to make the current element just valid.”
                minOps += (required - nums[i])
                nums[i] = required
            
        return minOps
        

# nums = [1,1,1]
# Output: 3

nums = [1,5,2,4,1]
# Output: 14

# nums = [8]
# Output: 0

sol = Solution()
print(sol.minOperations(nums))

