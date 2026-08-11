# 3318. Find X-Sum of All K-Long Subarrays I

from typing import List

class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:
        n = len(nums)
        result = []

        for i in range(n - k + 1):
            # Step 1: get current window
            window = nums[i:i + k]

            # Step 2: count frequency manually
            freq = {}
            for num in window:
                if num in freq:
                    freq[num] += 1
                else:
                    freq[num] = 1
            
            # Step 3: sort elements based on rules
            # higher frequency first, if tie → bigger number first
            items = list(freq.items())
            items.sort(key=lambda item: (-item[1], -item[0]))

            # Step 4: pick top x elements
            selected = set()
            for j in range(min(x, len(items))):
                selected.add(items[j][0])
            
            curr_sum = 0

            for num in window:
                if num in selected:
                    curr_sum += num
                
            result.append(curr_sum)

        return result


nums = [1,1,2,2,3,4,2,3]
k = 6
x = 2
# Output: [6,10,12]

# nums = [3,8,7,8,7,5]
# k = 2
# x = 2
# Output: [11,15,15,15,12]

sol = Solution()
print(sol.findXSum(nums, k, x))
