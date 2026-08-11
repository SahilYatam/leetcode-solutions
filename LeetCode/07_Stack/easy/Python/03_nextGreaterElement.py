from typing import List

# 496. Next Greater Element I

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        next_greater = {}
        result = []

        for num in nums2:
            while len(stack) != 0 and num > stack[-1]:
                popped = stack.pop()
                next_greater[popped] = num
            
            stack.append(num)
        
        for val in stack:
            next_greater[val] = -1
        
        for num in nums1:
            result.append(next_greater[num])

        return result



# nums1 = [4,1,2]
# nums2 = [1,3,4,2]
# Output: [-1,3,-1]

nums1 = [2,4]
nums2 = [1,2,3,4]
# Output: [3,-1]

sol = Solution()
print(sol.nextGreaterElement(nums1, nums2))

