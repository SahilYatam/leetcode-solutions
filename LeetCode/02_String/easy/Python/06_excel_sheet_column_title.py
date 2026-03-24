'''
LeetCode question: 168. Excel Sheet Column Title
'''

class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = ""

        while columnNumber > 0:
            columnNumber = columnNumber - 1

            remainder = columnNumber % 26

            letter = chr(65 + remainder)
            result = letter + result

            columnNumber = columnNumber // 26

        return result
    

sol = Solution()
print(sol.convertToTitle(15))

