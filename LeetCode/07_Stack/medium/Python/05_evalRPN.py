# 150. Evaluate Reverse Polish Notation

from typing import List
import math

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for i in range(len(tokens)):
            match tokens[i]:
                case "+":
                    fEle = stack.pop()
                    sEle = stack.pop()

                    stack.append(sEle + fEle)

                case "-":
                    fEle = stack.pop()
                    sEle = stack.pop()
                
                    stack.append(sEle - fEle)

                case "*":
                    fEle = stack.pop()
                    sEle = stack.pop()
                                    
                    stack.append(sEle * fEle)

                case "/":
                    fEle = stack.pop()
                    sEle = stack.pop()
                    ans = math.trunc(sEle / fEle)
                                    
                    stack.append(ans)
                case _:
                    num = int(tokens[i])
                    stack.append(num)

        return stack[0]  


        

# tokens = ["2","1","+","3","*"]
# Output: 9

tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
# Output: 22

sol = Solution()
print(sol.evalRPN(tokens))

