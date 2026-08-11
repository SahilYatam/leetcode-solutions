// 238. Product of Array Except Self
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution
{
public:
    vector<int> productExceptSelf(vector<int> &nums)
    {
        vector<int> answer(nums.size(), 0);

        int product = 1;

        for (int i = 0; i < nums.size(); i++)
        {
            answer[i] = product;
            product *= nums[i];
        }

        product = 1;
        for (int i = nums.size() - 1; i >= 0; i--)
        {
            answer[i] *= product;
            product *= nums[i];
        }

        return answer;
    }
};

int main()
{
    Solution sol;

    // vector<int> nums = {1, 2, 4, 6};
    // Output: {48,24,12,8}

    vector<int> nums = {-1,0,1,2,3};
    // Output: {0,-6,0,0,0}

    vector<int> result = sol.productExceptSelf(nums);

    for (int num : result)
    {
        cout << num << endl;
    }
}
