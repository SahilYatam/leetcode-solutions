# 1763. Longest Nice Substring

class Solution:
    def isNice(self, subStr: str) -> bool:
        char_set = set(subStr)

        for ch in subStr:
            if ch.lower() not in char_set:
                return False
            
            if ch.upper() not in char_set:
                return False
        
        return True
    
    def longestNiceSubstring(self, s: str) -> str:
        if self.isNice(s):
            return s
        
        char_set = set(s)

        for i in range(len(s)):
            # current character
            ch = s[i]

            if ch.lower() not in char_set or ch.upper() not in char_set:
                # spliting string
                left_part = s[:i]
                right_part = s[i+1:]

                # recursive calls
                left_result = self.longestNiceSubstring(left_part)
                right_result = self.longestNiceSubstring(right_part)

                # returning longest answer
                if len(left_result) >= len(right_result):
                    return left_result
                else:
                    return right_result
        
        return ""


s = "YazaAay"
# Output: "aAa"

# s = "Bb"
# Output: "Bb"

# s = "c"
# Output: ""

sol = Solution()
print(sol.longestNiceSubstring(s))

