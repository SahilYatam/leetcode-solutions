// Encode and Decode Strings
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:

    string encode(vector<string>& strs) {
        string fullStr = "";

        for(string word: strs){
            int len = word.length();
            fullStr += to_string(len) + "#" + word;
        }

        return fullStr;
    }

    vector<string> decode(string s) {
        vector<string> result;
        int i = 0;

        while(i < s.length()){
            // Read the length
            string len = "";
            
            while(s[i] != '#'){
                len += s[i];
                i++;
            }

            // Convert string to int
            int length = stoi(len);

            // skip "#"
            i++;

            // Read the word
            result.push_back(s.substr(i, length));

            // Jump to the next encoded word
            i += length;
        }

        return result;
    }
};

int main() {

    Solution sol;

    vector<string> strs = {"Hello", "World"};

    string s = sol.encode(strs);
    vector<string> result = sol.decode(s);

    for(string word: result){
        cout << word << endl;
    }
    
    return 0;
}


// Output: ["Hello","World"]
// Output: ["5?Hello5?World"]
