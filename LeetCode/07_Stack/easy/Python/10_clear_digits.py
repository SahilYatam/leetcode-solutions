# 3174. Clear Digits

class Solution:
    def clearDigits(self, s: str) -> str:
        stack = []

        for char in s:
            if char.isdigit():
                if len(stack) != 0:
                    stack.pop()
            else:
                stack.append(char)

        return "".join(stack)



# s = "abc"
# Output: "abc"

# s = "cb34"
# Output: ""

s = "leet15code0"
# Output: "lecod"

sol = Solution()
print(sol.clearDigits(s))

