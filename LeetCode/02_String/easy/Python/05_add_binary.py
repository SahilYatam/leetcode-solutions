'''
LeetCode question: 67.Add Binary
'''

class Solution:
    def addBinary(self, a: str, b: str):
        return str(bin(int(a,2) + int(b, 2)))[2:]
    
a = "11"
b = "1"
sol = Solution()
print(sol.addBinary(a,b))