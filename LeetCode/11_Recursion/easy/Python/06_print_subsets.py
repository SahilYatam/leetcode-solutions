from typing import List

def print_subsets(arr: List[int], ans: List[int], i: int):
    if i == len(arr):
        for an in ans:
            print(an)
        
        return

    # include
    ans.append(arr[i])
    print_subsets(arr, ans, i+1)

    # exclude
    ans.pop() # backtrack
    print_subsets(arr, ans, i+1)


arr = [1, 2, 3]
ans = []
i = 0
print(print_subsets(arr, ans, i))