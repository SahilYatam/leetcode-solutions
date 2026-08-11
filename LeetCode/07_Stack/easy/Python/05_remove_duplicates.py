# 1047. Remove All Adjacent Duplicates In String

class Solution:
    def removeDuplicates(self, s: str) -> str:
        stack = []

        for char in s:
            if len(stack) != 0 and stack[-1] == char:
                stack.pop()
            else:
                stack.append(char)

        return "".join(stack)


s = "abbaca"
# Output: "ca"

# s = "azxxzy"
# Output: "ay"

sol = Solution()
print(sol.removeDuplicates(s))