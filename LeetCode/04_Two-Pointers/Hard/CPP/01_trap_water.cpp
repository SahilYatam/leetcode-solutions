// 42. Trapping Rain Water

#include <iostream>
# include <vector>
# include <algorithm>

using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size();
        
        vector<int> leftMax(n);
        vector<int> rightMax(n);

        leftMax[0] = height[0];
        for(int i = 1; i < n; i++){
            leftMax[i] = max(leftMax[i - 1], height[i]);
        }

        rightMax[n - 1] = height[n - 1];
        for(int i = n - 2; i >= 0; i--){
            rightMax[i] = max(rightMax[i + 1], height[i]);
        }

        int ans = 0;
        for(int i = 1; i < n; i++){
            int water = min(leftMax[i], rightMax[i]) - height[i];
            
            if(water > 0){
                ans += water;
            }
        }

        return ans;
    }
};

int main(){
    Solution sol;
    vector<int> height = {0,1,0,2,1,0,1,3,2,1,2,1};
    // output: 6

    // vector<int> height = {4,2,0,3,2,5};
    // output: 9

    int result = sol.trap(height);
    cout << result << endl;

    return 0;
}

