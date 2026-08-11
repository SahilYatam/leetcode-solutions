# 2389. Longest Subsequence With Limited Sum

from typing import List


class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        nums.sort()

        n = len(nums)
        result = []

        prefixSum = [0] * (n) 
        prefixSum[0] = nums[0]

        for i in range(1, n):
            prefixSum[i] = prefixSum[i - 1] + nums[i]


        for i in range(len(queries)):
            st = 0
            end = len(prefixSum) - 1
            best = -1

            while st <= end:
                mid = st + (end - st) // 2

                if prefixSum[mid] <= queries[i]:
                    best = mid
                    st = mid + 1
                else:
                    end = mid - 1


            if best == -1:
                result.append(0)
            else:
                result.append(best + 1)
            
        return result
        


nums = [4,5,2,1]
queries = [3,10,21]
# Output: [2,3,4]

# nums = [2,3,4,5]
# queries = [1]
# Output: [0]


sol = Solution()
print(sol.answerQueries(nums, queries))
