
def factorial_of_n(n: int) -> int:
    if n == 1:
        return 1
    
    return n * factorial_of_n(n-1)

print(factorial_of_n(3))