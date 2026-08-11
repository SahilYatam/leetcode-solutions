# 1021. Remove Outermost Parentheses

class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        result = ""
        balance = 0

        for ch in s:
            if ch == "(":
                if balance > 0:
                    result += ch
                balance+=1

            elif ch == ")":
                balance -= 1
                if balance > 0:
                    result += ch

        return result

s = "(()())(())"
# Output: "()()()"

# s = "(()())(())(()(()))"
# Output: "()()()()(())"

# s = "()()"
# Output: ""

sol = Solution()
print(sol.removeOuterParentheses(s))