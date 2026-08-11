# 2932. Maximum Strong Pair XOR I

from typing import List

class Solution:
    def maximumStrongPairXor(self, nums: List[int]) -> int:
        nums.sort()
        maxXor = 0
        j = 0
        n = len(nums)

        for i in range(n):
            while j < n and nums[j] <= 2 * nums[i]:
                j+=1
            
            # Compute max XOR inside window
            for k in range(i, j):
                for l in range(k+1, j):
                    maxXor = max(maxXor, nums[k] ^ nums[l])

        
        return maxXor

# nums = [1,2,3,4,5]
# Output: 7

# nums = [10,100]
# Output: 0

nums = [5,6,25,30]
# Output: 7

sol = Solution()
print(sol.maximumStrongPairXor(nums))

