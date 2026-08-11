// 2094. Finding 3-Digit Even Numbers

#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_set>
using namespace std;

class Solution {
public:
    unordered_set<int> result;

    void backtrack(vector<int>& digits, vector<int>& path, vector<bool>& used){
        if(path.size() == 3){
            int num = path[0] * 100 + path[1] * 10 + path[2];

            if(num % 2 == 0){
                result.insert(num);
            }
            return;
        }

        for(int i = 0; i < digits.size(); i++){
            if(used[i]) continue;

            // Leading zero not allowed
            if(path.size() == 0 && digits[i] == 0) continue;

            used[i] = true;
            path.push_back(digits[i]);

            backtrack(digits, path, used);

            path.pop_back();
            used[i] = false;
        }

    }

    vector<int> findEvenNumbers(vector<int>& digits) {
        vector<int> path;
        vector<bool> used(digits.size(), false);

        backtrack(digits, path, used);

        vector<int> ans(result.begin(), result.end());

        sort(ans.begin(), ans.end());

        return ans;
    }
};

int main(){
    Solution sol;

    vector<int> digits = {2,1,3,0};
    // Output: [102,120,130,132,210,230,302,310,312,320]
    
    // vector<int> digits = {2,2,8,8,2};
    // Output: [222,228,282,288,822,828,882]

    // vector<int> digits = {3,7,5};
    // Output: []

    vector<int> result = sol.findEvenNumbers(digits);

    for(int num : result){
        cout << num << endl;
    }

    return 0;
}