# 844. Backspace String Compare

class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        sStack = []
        tStack = []

        for char in s:
            if char == "#":
                if len(sStack) != 0:
                    sStack.pop()
            else:
                sStack.append(char)
        
        for char in t:
            if char == "#":
                if len(tStack) != 0:
                    tStack.pop()
            else:
                tStack.append(char)

        return "".join(sStack) == "".join(tStack)


s = "ab#c"
t = "ad#c"
# Output: true
# Explanation: Both s and t become "ac".

# s = "ab##"
# t = "c#d#"
# Output: true
# Explanation: Both s and t become "".

# s = "a#c"
# t = "b"
# Output: false
# Explanation: s becomes "c" while t becomes "b".


sol = Solution()
print(sol.backspaceCompare(s, t))

