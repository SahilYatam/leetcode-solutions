# 424. Longest Repeating Character Replacement


class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left, right = 0, 0
        freq_map = {}
        max_len = 0
        max_freq = 0

        while right < len(s):
            if s[right] in freq_map:
                freq_map[s[right]] += 1
            else:
                freq_map[s[right]] = 1
            
            max_freq = max(max_freq, freq_map[s[right]])
            right += 1
            

            while right - left - max_freq > k:
                freq_map[s[left]] -= 1    
                
                left += 1
            
            max_len = max(max_len, right- left)
        
        return max_len


s = "AABABBA"
k = 1
# Output: 4

# s = "AABAAABAA"
# k = 1
# Output: 6

# s = "ABCDE"
# k = 1
# Output: 2

sol = Solution()
print(sol.characterReplacement(s, k))
