// 3300. Minimum Element After Replacement With Digit Sum
#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>

using namespace std;


class Solution {
public:
    int minElement(vector<int>& nums) {
        int minSum = INT_MAX;

        for(int num : nums){
            int digit_sum = 0;
            int temp = num;

            while(temp > 0){
                digit_sum += temp % 10;
                temp /= 10;
            }
            minSum = min(minSum, digit_sum);
        }

        return minSum;
    }
};

int main(){
    Solution sol;

    // vector<int> nums = {10,12,13,14};
    // Output: 1

    vector<int> nums = {999,19,199};
    // Output: 10

    // vector<int> nums = {1,2,3,4};
    // Output: 1

    int reuslt = sol.minElement(nums);

    cout << reuslt << endl;
}
