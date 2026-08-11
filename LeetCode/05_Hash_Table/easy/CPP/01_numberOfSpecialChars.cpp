// 3120. Count the Number of Special Characters I
#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int numberOfSpecialChars(string word) {
        int count = 0;
        unordered_set<char> word_set(word.begin(), word.end());

        for(char ch : word_set){
            if(islower(ch)){
                if(word_set.count(toupper(ch))){
                    count++;
                }
            }
        }
        return count;
    }
};

int main(){
    Solution sol;

    string word = "aaAbcBC";
    // Output: 3

    // string word = "abc";
    // Output: 0

    // string word = "abBCab"
    // Output: 1

    int result = sol.numberOfSpecialChars(word);

    cout << result << endl;
}
