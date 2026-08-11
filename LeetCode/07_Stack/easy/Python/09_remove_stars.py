# 2390. Removing Stars From a String

class Solution:
    def removeStars(self, s: str) -> str:
        stack = []

        for char in s:
            if char == "*":
                if len(stack) != 0:
                    stack.pop()
            else:
                stack.append(char)
        
        return "".join(stack)


# s = "leet**cod*e"
# Output: "lecoe"

s = "erase*****"
# Output: ""

sol = Solution()
print(sol.removeStars(s))

