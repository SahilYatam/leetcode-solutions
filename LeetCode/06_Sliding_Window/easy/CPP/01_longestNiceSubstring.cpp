// 1763. Longest Nice Substring
#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool isNice(string subStr){
        unordered_set<char> st(subStr.begin(), subStr.end());

        for(char ch : subStr){
            if(!st.count(tolower(ch))){
                return false;
            }
            if(!st.count(toupper(ch))){
                return false;
            }
        }
        return true;
    }

    string longestNiceSubstring(string s) {
        if(isNice(s)){
            return s;
        }

        unordered_set<char> st(s.begin(), s.end());

        for(int i = 0; i < s.length(); i++){
            // current character
            char ch = s[i];

            if(!st.count(tolower(ch)) || !st.count(toupper(ch))){
                // spliting string
                string left_part = s.substr(0,i);
                string right_part = s.substr(i+1);

                // recuersive calls
                string left_result = longestNiceSubstring(left_part);
                string right_result = longestNiceSubstring(right_part);

                if(left_result.length() >= right_result.length()){
                    return left_result;
                }
                else{
                    return right_result;
                }
            }
        }
        return "";
    }
};

int main(){
    Solution sol;

    string s = "YazaAay";
    // Output: "aAa"

    // string s = "Bb";
    // Output: "Bb"

    string result = sol.longestNiceSubstring(s);
    cout << result << endl;
}
