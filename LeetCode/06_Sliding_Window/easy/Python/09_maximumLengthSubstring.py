# 3090. Maximum Length Substring With Two Occurrences

class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        freq_map = {}
        maxLen = 0
        left = 0
        currLen = 0

        for right in range(len(s)):
            freq_map[s[right]] = freq_map.get(s[right], 0) + 1

            while freq_map.get(s[right], 0) > 2:
                freq_map[s[left]] -= 1

                if freq_map.get(s[left]) == 0:
                    del freq_map[s[left]]

                left+=1
            
            currLen = right - left + 1
            maxLen = max(maxLen, currLen)

        return maxLen




s = "bcbbbcba"
# Output: 4

# s = "aaaa"
# Output: 2

sol = Solution()
print(sol.maximumLengthSubstring(s))
