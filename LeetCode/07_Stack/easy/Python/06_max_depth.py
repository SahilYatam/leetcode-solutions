# 1614. Maximum Nesting Depth of the Parentheses

class Solution:
    def maxDepth(self, s: str) -> int:
        counter = 0
        maxCounter = 0

        for i in range(len(s)):
            if s[i] == "(":
                counter += 1
            elif s[i] == ")":
                counter -= 1
            
            maxCounter = max(maxCounter, counter)
        
        return maxCounter


# s = "(1+(2*3)+((8)/4))+1"
# Output: 3

# s = "(1)+((2))+(((3)))"
# Output: 3

s = "()(())((()()))"
# Output: 3

sol = Solution()
print(sol.maxDepth(s))

