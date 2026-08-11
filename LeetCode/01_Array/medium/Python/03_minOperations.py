# 1769. Minimum Number of Operations to Move All Balls to Each Box

from typing import List

class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        n = len(boxes)
        result = n * [n]
        cost = 0

        left_count = 0
        right_count = 0

        for i in range(n):
            if boxes[i] == "1":
                right_count += 1
                cost += i
                
        result[0] = cost


        for i in range(1, n):
            if boxes[i - 1] == "1":
                left_count += 1
                right_count -= 1
            
            result[i] = result[i - 1] + left_count - right_count
        
        return result

                
# Brute force
'''
class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        n = len(boxes)
        result = n * [n]

        for i in range(n):
            cost = 0
            for j in range(n):
                if boxes[j] == "1":
                    cost += abs(i - j)

            result[i] = cost
            
        return result

'''




boxes = "001011"
# Output: [11,8,5,4,3,4]

# boxes = "110"
# Output: [1,1,3]

sol = Solution()
print(sol.minOperations(boxes))
