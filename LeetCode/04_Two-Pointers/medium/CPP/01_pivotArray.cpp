// 2161. Partition Array According to Given Pivot

#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> pivotArray(vector<int>& nums, int pivot) {
        vector<int> smallerNums = {}, equalNums = {}, biggerNums = {};

        for(int i = 0; i < nums.size(); i++){
            if(nums[i] < pivot){
                smallerNums.push_back(nums[i]);
            }
            else if(nums[i] > pivot){
                biggerNums.push_back(nums[i]);
            }
            else {
                equalNums.push_back(nums[i]);
            }
        }

        vector<int> ans;
        ans.insert(ans.end(), smallerNums.begin(), smallerNums.end());
        ans.insert(ans.end(), equalNums.begin(), equalNums.end());
        ans.insert(ans.end(), biggerNums.begin(), biggerNums.end());

        return ans;
    }
};

int main(){
    Solution sol;

    vector<int> nums = {9,12,5,10,14,3,10};
    int pivot = 10;
    // Output: [9,5,3,10,10,12,14]

    // vector<int> nums = {-3,4,3,2};
    // int pivot = 2;
    // Output: [-3,2,4,3]

    vector<int> result = sol.pivotArray(nums, pivot);

    for(int num : result){
        cout << num << " ";
    }
    cout << endl;
}