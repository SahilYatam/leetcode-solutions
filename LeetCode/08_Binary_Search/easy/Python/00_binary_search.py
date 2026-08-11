from typing import List

'''
def binary_search(arr: List, target: int) -> int:
    st = 0
    end = len(arr) - 1
    while st <= end:
        mid = st + (end - st) // 2

        if target > arr[mid]:
            st = mid + 1
        elif target < arr[mid]:
            end = mid - 1
        else:
            return arr[mid]
    
    return -1
'''

def recursive_binary_search(arr: List, target: int, st: int, end:int) -> int:

    if st <= end:

        mid = st + (end - st) // 2

        if target > arr[mid]:
            return recursive_binary_search(arr, target, mid + 1, end)
        elif target < arr[mid]:
            return recursive_binary_search(arr, target, st, mid - 1)
        else:
            return arr[mid]
    
    return -1



arr = [-1, 0, 3, 4, 5, 9, 12]
target = 5
# print(binary_search(arr, target))
print(recursive_binary_search(arr, target, 0, len(arr) -1))