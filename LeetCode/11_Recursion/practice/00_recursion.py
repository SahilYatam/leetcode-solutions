

# def printNums(num: int):
#     if num == 0:
#         return
    
#     print(num)
#     printNums(num-1)

def printNums(num: int):
    if num == 0:
        return []
    
    return [num] + printNums(num-1)

print(printNums(4))
    