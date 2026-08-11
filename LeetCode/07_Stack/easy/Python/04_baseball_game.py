from typing import List

# 682. Baseball Game

class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack = []
        total = 0

        for op in operations:
            if op == "+":
                val = stack[-1] + stack[-2]
                stack.append(val)
                total += val
            
            elif op == "D":
                val = 2 * stack[-1]
                stack.append(val)
                total += val
            
            elif op == "C":
                val = stack.pop()
                total -= val
            
            else:
                val = int(op)
                stack.append(val)
                total += val

        return total
        
ops = ["5","2","C","D","+"]
# Output: 30

# ops = ["5","-2","4","C","D","9","+","+"]
# Output: 27

# ops = ["1","C"]
# Output: 0

sol = Solution()
print(sol.calPoints(ops))