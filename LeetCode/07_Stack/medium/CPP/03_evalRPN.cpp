// 150. Evaluate Reverse Polish Notation

#include <iostream>
#include <string>
#include <vector>
#include <stack>
#include <algorithm>
#include <cmath>

using namespace std;

class Solution{
public:
    int evalRPN(vector<string> &tokens){
        stack<int> bucket;
        
        for(int i = 0; i < tokens.size(); i++) {

            if (tokens[i] == "+") {

                int fEle = bucket.top();
                bucket.pop();

                int sEle = bucket.top();
                bucket.pop();

                bucket.push(sEle + fEle);

            } 
            else if (tokens[i] == "-") {

                int fEle = bucket.top();
                bucket.pop();

                int sEle = bucket.top();
                bucket.pop();

                bucket.push(sEle - fEle);

            } 
            else if (tokens[i] == "*") {

                int fEle = bucket.top();
                bucket.pop();

                int sEle = bucket.top();
                bucket.pop();

                bucket.push(sEle * fEle);

            } 
            else if (tokens[i] == "/") {

                int fEle = bucket.top();
                bucket.pop();

                int sEle = bucket.top();
                bucket.pop();

                bucket.push(sEle / fEle);

            } 
            else {
                int num = stoi(tokens[i]);
                bucket.push(num);
            }
        }

        return bucket.top();
    }
};

int main() {
    Solution sol;

    vector<string> tokens = {"10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"};
    // Output: 22
    int result = sol.evalRPN(tokens);
    cout << result << endl;
}
