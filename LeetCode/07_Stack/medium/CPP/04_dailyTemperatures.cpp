// 739. Daily Temperatures

#include <iostream>
#include <string>
#include <vector>
#include <stack>
#include <algorithm>

using namespace std;


class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        stack<pair<int, int>> stk;
        vector<int> ans(temperatures.size(), 0);

        for(int i = 0; i < temperatures.size(); i++){
            while(!stk.empty()){
                pair<int, int> top = stk.top();

                if(temperatures[i] <= top.first){
                    break;
                }

                int warmDay = i - top.second;
                ans[top.second] = warmDay;

                stk.pop();
            }

            stk.push({temperatures[i], i});
        }

        return ans;
    }
};

int main (){
    // vector<int> temperatures = {73,74,75,71,69,72,76,73};
    // Output: [1,1,4,2,1,1,0,0]

    vector<int> temperatures = {30,40,50,60};
    // Output: [1,1,1,0]

    Solution sol;
    vector<int> result = sol.dailyTemperatures(temperatures);

    for(int num : result){
        cout << num << endl;
    }
    

    return 0;
}