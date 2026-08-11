// 3689. Maximum Total Subarray Value I

#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_set>
using namespace std;

class Solution {
public:
    long long maxTotalValue(vector<int>& nums, int k) {
        auto maxNum = max_element(nums.begin(), nums.end());
        auto minNum = min_element(nums.begin(), nums.end());

        int val = *maxNum - *minNum;

        return 1LL * val * k;
    }
};

int main(){
    Solution sol;

    vector<int> nums = {1,3,2};
    int k = 2;
    // Output: 4

    // vector<int> nums = {4,2,5,1};
    // int k = 3
    // Output: 12

    int result = sol.maxTotalValue(nums, k);

    cout << result << endl;

    return 0;
}