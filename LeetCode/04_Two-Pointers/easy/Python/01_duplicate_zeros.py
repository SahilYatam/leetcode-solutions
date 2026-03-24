# 1089. Duplicate Zeros
from typing import List
class Solution:
    def duplicateZeros(self, arr: List[int]):
        n = len(arr)
        zeroCount = 0
        
        for num in arr:
            if num == 0: zeroCount += 1

        writeP = n + zeroCount - 1

        for i in range(n -1, -1, -1):
            if arr[i] != 0:
                if writeP < n:
                    arr[writeP] = arr[i]
                writeP -= 1
            else:
                if writeP < n:
                    arr[writeP] = 0
                writeP -= 1

                if writeP < n:
                    arr[writeP] = 0
                writeP -= 1
        
        return arr

        

arr = [1,0,2,3,0,4,5,0]
# Output: [1,0,0,2,3,0,0,4]

# arr = [1,2,3]
# Output: [1,2,3]

sol = Solution()
print(sol.duplicateZeros(arr))