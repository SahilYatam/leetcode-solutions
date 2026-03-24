'''
LeetCode question: 205. Isomorphic Strings
'''

class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t): 
            return False

        mapS = {}
        mapT = {}

        i = 0
        while i < len(s) and i < len(t):
            if s[i] in mapS:
                if mapS[s[i]] != t[i]:
                    return False
            else:
                mapS[s[i]] = t[i]            

            if t[i] in mapT:
                if mapT[t[i]] != s[i]:
                    return False
            else:
                mapT[t[i]] = s[i]
            i += 1
        
        return True




# s = "paper"
# t = "title"

s = "foo"
t = "bar"

sol = Solution()
print(sol.isIsomorphic(s,t))