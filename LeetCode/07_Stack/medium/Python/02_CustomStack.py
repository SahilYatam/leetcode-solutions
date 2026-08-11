# 1381. Design a Stack With Increment Operation

class CustomStack:

    def __init__(self, maxSize: int):
        self.stack = []
        self.inc = [0] * maxSize
        self.maxSize = maxSize

    def push(self, x: int) -> None:
        if len(self.stack) < self.maxSize:
            self.stack.append(x)

    def pop(self) -> int:
        size = len(self.stack)

        if size == 0:
            return -1

        topIndex = size - 1
        value = self.stack.pop() + self.inc[topIndex]

        if topIndex > 0:
            self.inc[topIndex - 1] += self.inc[topIndex]
        
        self.inc[topIndex] = 0

        return value
        

    def increment(self, k: int, val: int) -> None:
        size = len(self.stack)

        if size == 0:
            return

        index = min(k, size) -1

        if index >= 0:
            self.inc[index] += val
        

stack = CustomStack(5)
print(stack.push(1))
print(stack.push(2))
print(stack.push(3))

stack.increment(2, 100)
popVal = stack.pop()

print(stack.pop())
print(stack.pop())


