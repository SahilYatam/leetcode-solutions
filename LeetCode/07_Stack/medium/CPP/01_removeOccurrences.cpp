#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string removeOccurrences(string s, string part) {
        vector<char> stack;

        for(int i = 0; i < s.length(); i++){
            stack.push_back(s[i]);

            if(stack.size() >= part.length()){
                string str;
                for(char ch: stack){
                    str += ch;
                }

                string strPart = str.substr(str.size() - part.size());

                if(strPart == part){
                    for(int j = 0; j < part.length(); j++){
                        stack.pop_back();
                    }
                }
            }
        }

        string result;

        for(char ch: stack){
            result += ch;
        }

        return result;
    }
};

int main(){
    Solution sol;

    string s = "daabcbaabcbc", part = "abc";
    // Output: "dab"

    // string s = "axxxxyyyyb", part = "xy";
    // Output: "ab"
    
    string result = sol.removeOccurrences(s, part);

    cout << result << endl;
}