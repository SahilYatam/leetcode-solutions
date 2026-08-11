#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    void getAllSubsets(vector<int> &nums, vector<int> &ans, int i, vector<vector<int>> &allSubsets)
    {
        if (i == nums.size())
        {
            allSubsets.push_back({ans});
            return;
        }

        // include
        ans.push_back(nums[i]);
        getAllSubsets(nums, ans, i + 1, allSubsets);

        // exclude
        ans.pop_back();
        getAllSubsets(nums, ans, i + 1, allSubsets);
    }

    vector<vector<int>> subsets(vector<int> &nums)
    {
        vector<vector<int>> allSubsets;
        vector<int> ans;

        getAllSubsets(nums, ans, 0, allSubsets);

        return allSubsets;
    }
};

vector nums = {1, 2, 3};
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// vector nums = {0};
// Output: [[],[0]]


