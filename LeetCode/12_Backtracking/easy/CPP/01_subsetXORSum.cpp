// 1863. Sum of All Subset XOR Totals

#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int answer = 0;

    void backtrack(int idx, int currentXOR, vector<int>& nums){
        if(idx == nums.size()){
            answer += currentXOR;
            return;
        }

        // Take current element
        backtrack(idx + 1, currentXOR ^ nums[idx], nums);

        // Skip current element
        backtrack(idx + 1, currentXOR, nums);
    }

    int subsetXORSum(vector<int>& nums) {
        answer = 0;
        
        backtrack(0, 0, nums);

        return answer;
    };
};

int main(){
    Solution sol;

    vector<int> nums = {1,3};
    // Output: 6

    // vector<int> nums = {5,1,6};
    // Output: 28

    // vector<int> nums = {3,4,5,6,7,8};
    // Output: 480

    int result = sol.subsetXORSum(nums);

    cout << result << endl;
}
