# 1876. Substrings of Size Three with Distinct Characters

# class Solution:
#     def countGoodSubstrings(self, s: str) -> int:
#         good_string = 0

#         for i in range(0, len(s) - 2):
#             if s[i] != s[i + 1] and s[i] != s[i + 2] and s[i + 1] != s[i + 2]:
#                 good_string += 1
        
#         return good_string



class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        freq_map = {}
        left = 0
        good_string = 0

        for right in range(len(s)):
            # 1. Add incoming characters
            freq_map[s[right]] = freq_map.get(s[right], 0) + 1

            # 2. Shrink window if size > 3
            if right - left + 1 > 3:
                freq_map[s[left]] -= 1

                if freq_map[s[left]] == 0:
                    del freq_map[s[left]]
                
                left += 1
            
            # 3. Check for valid window
            if right - left + 1 == 3 and len(freq_map) == 3:
                good_string += 1
        
        return good_string

s = "xyzzaz"
# Output: 1

# s = "aababcabc"
# Output: 4


sol = Solution()
print(sol.countGoodSubstrings(s))