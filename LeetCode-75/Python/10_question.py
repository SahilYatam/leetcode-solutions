'''
392. Is Subsequence
'''

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        a = 0
        b = 0
        while b < len(t):
            if s[a] == t[b]:
                a += 1
                b += 1
                if a == len(s):
                    return True
            else:
                b += 1
        
        return False


# s = "abc"
# t = "ahbgdc"
# Output: true

s = "b"
t = "abc"

# s = "axc"
# t = "ahbgdc"
# Output: false

sol = Solution()
print(sol.isSubsequence(s,t))