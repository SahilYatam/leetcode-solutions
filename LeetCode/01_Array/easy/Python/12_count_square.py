'''
LeetCode question: 1925. Count Square Sum Triples
'''
import math

class Solution:
    def countTriples(self, n: int) -> int:
        count = 0

        for a in range(1, n):
            for b in range(1, n):
                a_sqaured = a * a
                b_sqaured = b * b

                sum = a_sqaured + b_sqaured

                c = math.sqrt(sum)

                if c == int(c) and c <= n:
                    count += 1

        return count

n = 5
sol = Solution()
print(sol.countTriples(n))