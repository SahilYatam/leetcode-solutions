'''
LeetCode question: 20. Valid Parentheses
'''
from collections import deque
class Solution:
    def isValid(self, s: str) -> bool:
        stack = deque()

        map = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for char in s:
            if char in map:
                if len(stack) == 0: 
                    return False

                top = stack.pop()

                if top != map[char]:
                    return False
            else:
                stack.append(char)

        return len(stack) == 0
    
s = "()[]{}"
sol = Solution()
print(sol.isValid(s))