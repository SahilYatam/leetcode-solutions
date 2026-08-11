#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int> arr, int target, int st, int end)
{
    if (st <= end)
    {
        int mid = st + (end - st) / 2;

        if (arr[mid] == target)
        {
            return mid;
        }

        if (arr[mid] <= target)
        {
            return binarySearch(arr, target, mid + 1, end);
        }
        else
        {
            return binarySearch(arr, target, st, mid - 1);
        }
    }
    return -1;
}

int main()
{
    vector<int> arr = {-1, 0, 3, 5, 9, 12};
    int target = 0;

    int result = binarySearch(arr, target, 0, arr.size() - 1);

    cout << result << endl;
    return 0;
}
