# 155. Min Stack
from typing import List

class MinStack:

    def __init__(self, valStack: List, minStack: List):
        self.valStack = valStack
        self.minStack = minStack

    def push(self, value: int) -> None:
        self.valStack.append(value)

        if len(self.minStack) == 0:
            self.minStack.append(value)
        elif value < self.minStack[-1]:
            self.minStack.append(value)
        else:
            topVal = self.minStack[-1]
            self.minStack.append(topVal)

    def pop(self) -> None:
        self.valStack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.valStack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]