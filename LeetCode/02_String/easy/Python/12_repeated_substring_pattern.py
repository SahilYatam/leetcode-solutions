# 459. Repeated Substring Pattern

class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        sLen = len(s)

        for i in range(1, sLen // 2 + 1):
            if sLen % i == 0:
                subStr = s[0:i]
                repeated = subStr * (sLen // i)

                if repeated == s:
                    return True
        
        return False


# s = "abab"
# Output: true

s = "aba"
# Output: false

# s = "abcabcabcabc"
#  Output: true

sol = Solution()
print(sol.repeatedSubstringPattern(s))
