// 11. Container With Most Water

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& heights) {
        int ans = 0, left = 0, right = heights.size()-1;

        while(left < right){
            int width = right - left;
            int curr_heigth = min(heights[left], heights[right]);
            
            int max_area = curr_heigth * width;
            ans = max(ans, max_area);

            if(heights[left] < heights[right]){
                left++;
            } else {
                right--;
            }
        }

        return ans;
    }
};

int main(){
    Solution sol;
    vector<int> heights = {1,7,2,5,4,7,3,6};
    // output: 36

    // vector<int> heights = {2,2,2};
    // output: 4

    int result = sol.maxArea(heights);
    cout << result << endl;

    return 0;
}

