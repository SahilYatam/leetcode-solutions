// 20. Valid Parentheses

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <stack>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> bucket;
        
        unordered_map<char, char> map;
        map['}'] = '{';
        map[']'] = '[';
        map[')'] = '(';

        for(char ch : s){
            if(map.find(ch) != map.end()){
                if(bucket.empty()){
                    return false;
                }

                char top = bucket.top();
                bucket.pop();

                if(top != map[ch]){
                    return false;
                }

            } else {
                bucket.push(ch);
            }
        }

        return bucket.empty();

    }
};



int main(){
    Solution sol;

    string s = "([{}])";
    // Output: true

    // string s = "[(])";
    // Output: false

    bool result = sol.isValid(s);
    cout<< boolalpha << result << endl;

    return 0;
}
