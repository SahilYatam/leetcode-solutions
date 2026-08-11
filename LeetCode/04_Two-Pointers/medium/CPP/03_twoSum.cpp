// 167. Two Sum II - Input Array Is Sorted

#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_set>
using namespace std;

class Solution
{
public:
    vector<int> twoSum(vector<int> &numbers, int target)
    {
        int left = 0, right = numbers.size() - 1;

        while (left < right)
        {
            int sum = numbers[left] + numbers[right];

            if (sum > target)
            {
                right--;
            }
            else if (sum < target)
            {
                left++;
            }
            else
            {
                return {left + 1, right + 1};
            }
        }

        return {};
    }
};

int main()
{
    Solution sol;

    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    // output: {1,2}

    // vector<int> nums = {2,3,4};
    // int target = 6;
    // output: {1,3}

    vector<int> result = sol.twoSum(nums, target);

    for (int num : result)
    {
        cout << num << endl;
    }
}
