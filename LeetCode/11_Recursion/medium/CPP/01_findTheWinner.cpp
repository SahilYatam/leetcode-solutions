// 1823. Find the Winner of the Circular Game
#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int recurFn(vector<int>& arr, int k, int idx){
        if(arr.size() == 1){
            return arr[0];
        }

        idx = (idx + k - 1) % arr.size();

        arr.erase(arr.begin() + idx);

        return recurFn(arr, k, idx);
    }

    int findTheWinner(int n, int k) {
        vector<int> arr;

        for(int i = 1; i <= n; i++){
            arr.push_back(i);
        }
        return recurFn(arr, k, 0);
    }
};

int main(){
    Solution sol;

    int n = 5, k = 2;
    // Output: 3

    // int n = 6, k = 5;
    // Output: 1

    int result = sol.findTheWinner(n, k);
    cout << result << endl;

    return 0;
}
