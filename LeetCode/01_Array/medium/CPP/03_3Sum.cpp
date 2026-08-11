// 15. 3Sum

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;


class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<vector<int>> result;

        for(int i = 0; i < nums.size(); i++){
            // Skip duplicate
            if(i > 0 && nums[i] == nums[i-1]){
                continue;
            }

            int left = i + 1, right = nums.size() -1;

            while(left < right){
                int sum = nums[i] + nums[left] + nums[right];

                if(sum == 0){
                    result.push_back({nums[i], nums[left], nums[right]});
                    left++;
                    right--;

                    // Skip duplicate on left pointer
                    while(left < right && nums[left] == nums[left-1]){
                        left++;
                    }

                    // Skip duplicate on right pointer
                    while(left < right && nums[right] == nums[right+1]){
                        right--;
                    }
                }
                else if(sum < 0){
                    left++;
                }
                else if(sum > 0){
                    right--;
                }
            }
        }
        return result;
    }
};

int main(){
    Solution sol;

    vector<int> nums = {-1,0,1,2,-1,-4};
    // Output: [[-1,-1,2],[-1,0,1]]

    vector<vector<int>> result = sol.threeSum(nums);

    for(vector<int> num : result){
        cout << '[' << endl;
        for(int n : num){
            cout << n << endl;
        }
        cout << ']' << endl;
    }

    return 0;
}