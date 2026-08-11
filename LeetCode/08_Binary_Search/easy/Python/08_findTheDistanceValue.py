# 1385. Find the Distance Value Between Two Arrays

from typing import List


class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        arr1.sort()
        arr2.sort()

        n1 = len(arr1)
        n2 = len(arr2)
        count = 0

        for x in range(n1):
            st, end = 0, n2
            while st < end:
                mid = st + (end - st) // 2

                if arr2[mid] >= arr1[x] - d:
                    end = mid
                else:
                    st = mid + 1
            
            if st == n2:
                count += 1
                continue
            elif arr2[st] <= (arr1[x] + d):
                continue
            else:
                count += 1

        return count


"""
# Brute force


class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        arr1.sort()
        arr2.sort()

        n1 = len(arr1)
        n2 = len(arr2)

        count = 0

        for i in range(n1):
            valid = True

            for j in range(n2):
                if abs(arr1[i] - arr2[j]) <= d:
                    valid = False
                    break
            
            if valid:
                count += 1

        return count


"""

# arr1 = [4, 5, 8]
# arr2 = [10, 9, 1, 8]
# d = 2
# Output: 2

# arr1 = [1,4,2,3]
# arr2 = [-4,-3,6,10,20,30]
# d = 3
# Output: 2

arr1 = [2, 1, 100, 3]
arr2 = [-5, -2, 10, -3, 7]
d = 6
# Output: 1


sol = Solution()
print(sol.findTheDistanceValue(arr1, arr2, d))
