# 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

from typing import List

class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        n = len(arr)
        count = 0
        currSum = 0
        
        for i in range(k):
            currSum += arr[i]
        
        if currSum // k >= threshold:
            count += 1
        
        for i in range(k, n):
            currSum -= arr[i - k]

            currSum += arr[i]

            if currSum // k >= threshold:
                count += 1
        

        return count    

# arr = [2,2,2,2,5,5,5,8]
# k = 3
# threshold = 4
# Output: 3

arr = [11,13,17,23,29,31,7,5,2,3]
k = 3
threshold = 5
# Output: 6

sol = Solution()
print(sol.numOfSubarrays(arr, k, threshold))

