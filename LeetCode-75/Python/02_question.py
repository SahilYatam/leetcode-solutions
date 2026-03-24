'''
LeetCode question: 1071. Greatest Common Divisor of Strings
'''

def findGCD(a, b):
    if a == 0: return b
    return findGCD(b % a, a)

class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""
        
        gcd = findGCD(len(str1), len(str2))

        return str1[0:gcd]


str1 = "ABABAB"
str2 = "ABAB"
# str1 = "LEET", str2 = "CODE"
sol = Solution()
print(sol.gcdOfStrings(str1, str2))