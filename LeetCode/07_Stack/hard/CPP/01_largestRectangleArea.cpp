// 84. Largest Rectangle in Histogram

#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>


using namespace std;

class Solution {

public:

    int largestRectangleArea(vector<int>& heights) {

        int maxArea = 0;

        stack<pair<int, int>> stck;

        for (int i = 0; i < heights.size(); i++) {

            int h = heights[i];

            int start = i;

            while (!stck.empty() && stck.top().second > h) {

                auto [idx, height] = stck.top();

                stck.pop();

                maxArea = max(maxArea, height * (i - idx));

                start = idx;
            }

            stck.push({start, h});
        }

        while (!stck.empty()) {

            auto [idx, h] = stck.top();

            stck.pop();

            maxArea = max(maxArea, h * (static_cast<int>(heights.size()) - idx));
        }

        return maxArea;
    }
};

int main() {

    vector<int> heights = {2, 1, 5, 6, 2, 3};

    // Output: 10

    // vector<int> heights = {7, 1, 7, 2, 2, 4};
    // Output: 8

    Solution sol;

    int result = sol.largestRectangleArea(heights);

    cout << result << endl;

    return 0;
}