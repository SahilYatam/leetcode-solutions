#include <iostream>
using namespace std;

class Solution {
public:
    int fib(int n) {
        if(n == 0 || n == 1){
            return n;
        }
        
        return fib(n-1) + fib(n-2);
    }
};

int main(){
    Solution sol;
    // int n = 2;
    // Output: 1

    // int n = 3;
    // Output: 2

    int n = 4;
    // Output: 3
    int val = sol.fib(n);
    cout << val << endl;
}