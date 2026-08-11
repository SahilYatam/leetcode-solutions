# 2149. Rearrange Array Elements by Sign

from typing import List

class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        positiveNums = []
        negetiveNums = []
        ans = []
        

        for i in range(len(nums)):
            if nums[i] > 0:
                positiveNums.append(nums[i])
            else:
                negetiveNums.append(nums[i])

        pPointer = 0
        nPointer = 0

        while pPointer < len(positiveNums) and nPointer < len(negetiveNums):
            ans.append(positiveNums[pPointer])
            ans.append(negetiveNums[nPointer])
            
            pPointer += 1
            nPointer += 1

        return ans

nums = [3,1,-2,-5,2,-4]
# Output: [3,-2,1,-5,2,-4]

# nums = [-1,1]
# Output: [1,-1]

sol = Solution()
print(sol.rearrangeArray(nums))