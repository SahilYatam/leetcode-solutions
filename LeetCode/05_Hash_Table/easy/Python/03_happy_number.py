# 202. Happy Number

class Solution:
    def getNextNumber(self, n: int) -> int:
        sum = 0

        while n > 0:
            digit = n % 10
            square = digit * digit

            sum += square

            n = n // 10

        return sum


    def isHappy(self, n: int) -> bool:
        my_set = set()

        while n != 1:
            if n in my_set:
                return False

            my_set.add(n)
            n = self.getNextNumber(n)

        return True

n = 19
# Output: true

'''
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
'''

# n = 2
# Output: false

sol = Solution()
print(sol.isHappy(n))