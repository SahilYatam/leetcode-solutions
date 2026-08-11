// 2144. Minimum Cost of Buying Candies With Discount

#include <iostream>
#include <vector>
#include <algorithm>
#include <functional>
#include <numeric>
using namespace std;


class Solution {
public:
    int minimumCost(vector<int>& cost) {
        int answer = 0;

        sort(cost.begin(), cost.end(), greater<int>());

        for(int i = 0; i < cost.size(); i++){
            if(i % 3 != 2){
                answer += cost[i];
            }
        }

        return answer;
    }
};


int main(){
    Solution sol;

    // vector<int> cost = {1,2,3};
    // Output: 5

    // vector<int> cost = {6,5,7,9,2,2};
    // Output: 23

    vector<int> cost = {5,5};
    // Output: 10

    int result = sol.minimumCost(cost);

    cout << result << endl;
}
