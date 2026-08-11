// 1493. Longest Subarray of 1's After Deleting One Element

#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int n = nums.size();
        int left = 0;
        int answer = 0;
        int zeroCount = 0;

        for(int right = 0; right < n; right++){
            if(nums[right] == 0){
                zeroCount++;
            }

            while(zeroCount > 1){
                if(nums[left] == 0){
                    zeroCount--;
                }
                left++;
            }

            answer = max(answer, right - left);
        }

        return answer;
    }
};

int main(){
    Solution sol;

    // vector<int> nums = {1,1,0,1};
    // Output: 3

    vector<int> nums = {0,1,1,1,0,1,1,0,1};
    // Output: 5

    // vector<int> nums = {1,1,1};
    // Output: 2

    int result = sol.longestSubarray(nums);
    cout << result << endl;
}


