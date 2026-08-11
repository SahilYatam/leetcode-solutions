# 1358. Number of Substrings Containing All Three Characters

class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        freq = {}
        n = len(s)

        left = 0
        answer = 0

        for right in range(n):
            freq[s[right]] = freq.get(s[right], 0) + 1

            while 'a' in freq and 'b' in freq and 'c' in freq:
                answer += (n-right)

                freq[s[left]] -= 1

                if freq[s[left]] == 0:
                    del freq[s[left]]
                
                left += 1

        return answer
                


s = "abcabc"
# Output: 10

# s = "aaacb"
# Output: 3

# s = "abc"
# Output: 1

sol = Solution()
print(sol.numberOfSubstrings(s))