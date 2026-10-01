// 853. Car Fleet

#include <iostream>
#include <string>
#include <vector>
#include <stack>
#include <algorithm>
#include <cmath>

using namespace std;

class Solution {
public:
    int carFleet(int target, vector<int>& position, vector<int>& speed) {
        vector<pair<int, int>> pairs;

        for(int i = 0; i < position.size(); i++){
            pairs.push_back({position[i], speed[i]});
        }

        sort(pairs.rbegin(), pairs.rend());

        stack<double> bucket;

        for(auto [p, s]: pairs){
            bucket.push((double)(target-p)/s);
            
            if(bucket.size() >= 2){
                double fTop = bucket.top();
                bucket.pop();
                
                double sTop = bucket.top();

                if(fTop > sTop){
                    bucket.push(fTop);
                }
            }

        }

        return bucket.size();
    }
};

int main(){
    Solution sol;

    // int target = 12;
    // vector<int> position = {10,8,0,5,3};
    // vector<int> speed = {2,4,1,1,3};
    //output: 3

    int target = 100;
    vector<int> position = {0,2,4};
    vector<int> speed = {4,2,1};
    //output: 1

    int result = sol.carFleet(target, position, speed);
    cout << result << endl;

    return 0;
}