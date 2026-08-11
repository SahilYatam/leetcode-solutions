// 347. Top K Frequent Elements

#include <iostream>
#include <unordered_map>
#include <vector>
#include <algorithm>
using namespace std;

class Solution
{
public:
    vector<int> topKFrequent(vector<int> &nums, int k)
    {
        unordered_map<int, int> hashMap;
        vector<int> result;

        for (int num : nums)
        {
            hashMap[num]++;
        }

        // Store (number, frequency) pairs
        vector<pair<int, int>> values;
        for (const auto &pair : hashMap)
        {
            values.push_back(pair);
        }

        // Sort by frequency (highest first)
        sort(values.begin(), values.end(),
             [](const pair<int, int> &a, const pair<int, int> &b)
             {
                 return a.second > b.second;
             });

        // Take the first k numbers
        for (int i = 0; i < k; i++)
        {
            result.push_back(values[i].first);
        }

        return result;
    }
};

int main()
{
    Solution sol;

    vector<int> nums = {1, 1, 1, 2, 2, 3};
    int k = 2;
    // Output: [1,2]

    // vector<int> nums = {1,2,1,2,1,2,3,1,3,2};
    // int k = 2;
    // Output: [1,2]

    vector<int> result = sol.topKFrequent(nums, k);

    for (int num : result)
    {
        cout << num << endl;
    }
}