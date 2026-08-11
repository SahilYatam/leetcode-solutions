// 1248. Count Number of Nice Subarrays

#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int numberOfSubarrays(vector<int>& nums, int k) {
        int left = 0, oddCount = 0, leadingEvens = 0, answer = 0;
        int n = nums.size();

        for(int right = 0; right < n; right++){
            if(nums[right] % 2 != 0){
                oddCount++;
                leadingEvens = 0;
            }

            while(oddCount > k){
                if(nums[left] % 2 != 0){
                    oddCount--;
                }
                left++;
            }

            while(oddCount == k && nums[left] % 2 == 0){
                leadingEvens++;
                left++;
            }

            if(oddCount == k){
                answer += leadingEvens + 1;
            }

        }

        return answer;
    }
};

int main(){
    Solution sol;

    // vector<int> nums = {1,1,2,1,1};
    // int k = 3;
    // Output: 2

    // vector<int> nums = {2,4,6};
    // int k = 1;
    // Output: 0

    vector<int> nums = {2,2,2,1,2,2,1,2,2,2};
    int k = 2;
    // Output: 16

    int result = sol.numberOfSubarrays(nums, k);
    cout << result << endl;
}

