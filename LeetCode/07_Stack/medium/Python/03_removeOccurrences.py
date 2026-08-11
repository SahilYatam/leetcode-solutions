# 1910. Remove All Occurrences of a Substring

class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        n = len(s)
        partLen = len(part)
        stack = []

        for i in range(n):
            stack.append(s[i])

            if len(stack) >= partLen:
                if ''.join(stack[-len(part):]) == part:
                    for j in range(partLen):
                        stack.pop()
            
        
        return ''.join(stack)


# s = "daabcbaabcbc"
# part = "abc"
# Output: "dab"

s = "axxxxyyyyb"
part = "xy"
# Output: "ab"


sol = Solution()
print(sol.removeOccurrences(s, part))