# 1863. Sum of All Subset XOR Totals

from typing import List

class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        answer = 0
        
        def backtrack(idx, currentXOR):
            nonlocal answer

            if idx == len(nums):
                answer += currentXOR
                return
            
            # Take current element
            backtrack(idx+1, currentXOR ^ nums[idx])

            # Skip current element
            backtrack(idx+1, currentXOR)
        
        backtrack(0, 0)

        return answer


# nums = [1,3]
# Output: 6

# nums = [5,1,6]
# Output: 28

nums = [3,4,5,6,7,8]
# Output: 480

sol = Solution()
print(sol.subsetXORSum(nums))