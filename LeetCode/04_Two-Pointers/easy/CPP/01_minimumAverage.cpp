// 3194. Minimum Average of Smallest and Largest Elements

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    double minimumAverage(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<double> avg;

        int left = 0, right = nums.size() -1;

        while(left < right){
            double avarage = (nums[left] + nums[right]) / 2.0;
            
            avg.push_back(avarage);

            left++;
            right--;
        }
        return *min_element(avg.begin(), avg.end());
    }
};

int main(){
    Solution sol;

    vector<int> nums = {7,8,3,4,15,13,4,1};
    // Output: 5.5

    // vector<int> nums = {1,9,8,3,10,5};
    // Output: 5.5

    double result = sol.minimumAverage(nums);

    cout << result << endl;
}
