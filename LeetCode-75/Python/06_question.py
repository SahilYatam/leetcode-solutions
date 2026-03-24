'''
Dificulty: Medium
238. Product of Array Except Self
'''

'''
Pre-initialize the arrays with the right size

Create arrays filled with zeros (or any placeholder) FIRST
THEN assign to specific indices
This works for all three loops!
'''

from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        answer = [0 for _ in range(len(nums))]

        product = 1
        for i in range(len(nums)):
            answer[i] = product
            product = product * nums[i]
        
        product = 1
        for i in range(len(nums) -1, -1, -1):
            answer[i] = answer[i] * product
            product = product * nums[i]

        
        return answer



nums = [1,2,3,4]
# Output: [24,12,8,6]

# nums = [-1,1,0,-3,3]
# Output: [0,0,9,0,0]

sol = Solution()
print(sol.productExceptSelf(nums))

# Old version:

'''
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        leftProducts = [0 for _ in range(len(nums))]
        rightProducts = [0 for _ in range(len(nums))]
        answer = [0 for _ in range(len(nums))]

        product = 1

        for i in range(len(nums)):
            leftProducts[i] = product
            product = product * nums[i]
        
        product = 1

        for i in range(len(nums) -1, -1, -1):
            rightProducts[i] = product
            product = product * nums[i]
        
        for i in range(len(nums)):
            answer[i] = leftProducts[i] * rightProducts[i]
        
        return answer
'''