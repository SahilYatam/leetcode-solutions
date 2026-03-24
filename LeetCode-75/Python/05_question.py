'''
151. Reverse Words in a String
'''

class Solution:
    def reverseWords(self, s: str) :
        str = s.strip().split()
        result = []

        for i in range(len(str) -1, -1, -1):
            result.append(str[i])

        return " ".join(result)

s = "a good   example"

sol = Solution()
print(sol.reverseWords(s))