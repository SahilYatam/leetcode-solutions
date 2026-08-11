# 509 Fibonacci Number

class Solution:
    def fib(self, n: int) -> int:
        if n == 0 or n == 1:
            return n
        
        return self.fib(n-1) + self.fib(n-2)

n = 2
# Output: 1

# n = 3
# Output: 2

# n = 4
# Output: 3

sol = Solution()
print(sol.fib(n))
