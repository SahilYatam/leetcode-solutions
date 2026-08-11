def sumOfN(n: int) -> int:
    if n == 1:
        return 1
    
    return n + sumOfN(n-1)

print(sumOfN(3))