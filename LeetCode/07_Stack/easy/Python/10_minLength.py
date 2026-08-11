# 2696. Minimum String Length After Removing Substrings


class Solution:
    def minLength(self, s: str) -> int:
        stack = []
        n = len(s)
        
        for i in range(n):
            if stack and stack[-1] == "A" and s[i] == "B":
                stack.pop()
            elif stack and stack[-1] == "C" and s[i] == "D":
                stack.pop()
            else:
                stack.append(s[i])

        return len(stack)


s = "ABFCACDB"
# Output: 2

# s = "ACBBD"
# Output: 5

sol = Solution()
print(sol.minLength(s))
