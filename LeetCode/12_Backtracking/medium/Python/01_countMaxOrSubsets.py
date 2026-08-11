# 2044. Count Number of Maximum Bitwise-OR Subsets

from typing import List

class Solution:
    def countMaxOrSubsets(self, nums: List[int]) -> int:
        # Find the maximum possible OR.
        # OR-ing all numbers together always gives maximum OR.
        maxOR = 0
        for num in nums:
            maxOR |= num
        
        count = 0

        # recursive helper function
        def backtrack(idx, currentOR):
            nonlocal count

            # base case: we processed all elements
            if idx == len(nums):
                # if this subset OR equals maxOR,
                if currentOR == maxOR:
                    count += 1
                
                return
        
            # TAKE current element
            backtrack(idx + 1, currentOR | nums[idx])

            # SKIP current element
            backtrack(idx + 1, currentOR)

        # start recursion
        backtrack(0,0)

        return count
        

nums = [3,1]
# Output: 2

# nums = [2,2,2]
# Output: 7

# nums = [3,2,1,5]
# Output: 6

sol = Solution()
print(sol.countMaxOrSubsets(nums))
