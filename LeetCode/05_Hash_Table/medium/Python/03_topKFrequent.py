# 347. Top K Frequent Elements

from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashMap = {}
        result = []

        for num in nums:
            if num in hashMap:
                hashMap[num] +=  1
            else:
                hashMap[num] = 1
        

        values = []

        for key, val in hashMap.items():
            values.append((key, val))
        
        sortedValue = sorted(values, key=lambda x : x[1], reverse=True)

        for num in sortedValue[:k]:
            result.append(num[0])
            
        return result

nums = [1,1,1,2,2,3]
k = 2
# Output: [1,2]

# nums = [1,2,1,2,1,2,3,1,3,2]
# k = 2
# Output: [1,2]
        
# nums = [1]
# k = 1
# Output: [1]

sol = Solution()
print(sol.topKFrequent(nums, k))