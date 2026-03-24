'''
605. Can Place Flowers
'''

from typing import List

class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0: return True
        for i in range(len(flowerbed)):
            if (
                flowerbed[i] == 0 and 
                (i == 0 or flowerbed[i - 1] == 0) and 
                (i == len(flowerbed) - 1 or flowerbed[i + 1] == 0)
            ):
                flowerbed[i] = 1
                n -= 1
                if n == 0:
                    return True
                
        return n == 0


flowerbed = [1,0,0,0,1]
n = 2

sol = Solution()
print(sol.canPlaceFlowers(flowerbed, n))