# 1823. Find the Winner of the Circular Game
from typing import List

class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        arr = [i + 1 for i in range(n)]

        def recurFn (arr: List[int], k: int, idx: int):
            if len(arr) == 1:
                return arr[0]

            idx = (idx + k - 1) % len(arr)
            
            del arr[idx]

            return recurFn(arr, k, idx);

        return recurFn(arr, k, 0)


n = 5
k = 2
# Output: 3

# n = 6
# k = 5
# Output: 1

sol = Solution()
print(sol.findTheWinner(n, k))