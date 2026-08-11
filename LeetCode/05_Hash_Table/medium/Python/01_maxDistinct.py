# 3760. Maximum Substrings With Distinct Start

class Solution:
    def maxDistinct(self, s: str) -> int:
        my_set = set()

        for ch in s:
            if ch not in my_set:
                my_set.add(ch)
        
        return len(my_set)



s = "abab"
# Output: 2

# Explanation:

# Split "abab" into "a" and "bab".
# Each substring starts with a distinct character i.e 'a' and 'b'. Thus, the answer is 2.

# s = "abcd"
# Output: 4

# s = "aaaa"
# Output: 1
sol = Solution()
print(sol.maxDistinct(s))