# 888. Fair Candy Swap


from typing import List

class Solution:
    def fairCandySwap(self, aliceSizes: List[int], bobSizes: List[int]) -> List[int]:
        my_set = set(bobSizes)
        
        sumA = sum(aliceSizes)
        sumB = sum(bobSizes)

        diff = (sumA - sumB) // 2

        for x in aliceSizes:
            y = x - diff
            if y in my_set:
                return [x, y]
        
        return []
        
# aliceSizes = [1,1]
# bobSizes = [2,2]
# Output: [1,2]

# aliceSizes = [1,2]
# bobSizes = [2,3]
# Output: [1,2]

aliceSizes = [2]
bobSizes = [1,3]
# Output: [2,3]


sol = Solution()
print(sol.fairCandySwap(aliceSizes, bobSizes))
