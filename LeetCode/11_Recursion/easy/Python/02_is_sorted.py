from typing import List

def isSorted(arr: List[int], n: int) -> bool:
    if n == 0 or n == 1:
        return True
    
    if arr[n-1] >= arr[n-2] and isSorted(arr, n-1):
        return True
    
    return False
    
arr = [1, 5, 3, 2, 4]
print(isSorted(arr, len(arr)))
