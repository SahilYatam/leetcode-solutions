// 2149. Rearrange Array Elements by Sign

#include <iostream>
#include <vector>
using namespace std;


class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) {
        vector<int> positiveNums = {}, negetiveNums = {};
        
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] > 0){
                positiveNums.push_back(nums[i]);
            }
            else {
                negetiveNums.push_back(nums[i]);
            }
        }

        int pPointer = 0, nPointer = 0;
        vector<int> ans;

        while(pPointer < positiveNums.size() && nPointer < negetiveNums.size()){
            ans.push_back(positiveNums[pPointer]);    
            ans.push_back(negetiveNums[nPointer]);    

            pPointer++;
            nPointer++;
        }

        return ans;
    }
};

int main(){
    Solution sol;

    vector<int> nums = {3,1,-2,-5,2,-4};
    // Output: [3,-2,1,-5,2,-4]

    // vector<int> nums = {-1,1};
    // Output: [1,-1]

    vector<int> result = sol.rearrangeArray(nums);

    for(int num : result){
        cout << num << " ";
    }
    cout << endl;
}