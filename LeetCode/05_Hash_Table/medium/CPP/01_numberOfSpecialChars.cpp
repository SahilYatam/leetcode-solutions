// 3120. Count the Number of Special Characters I
#include <iostream>
#include <string>
#include <unordered_map>
#include <cctype>
using namespace std;

class Solution {
public:
    int numberOfSpecialChars(string word) {
        int count = 0;

        unordered_map<char, int> lowercase_positions;
        unordered_map<char, int> uppercase_positions;

        for (int i = 0; i < word.length(); i++) {

            if (islower(word[i])) {
                lowercase_positions[word[i]] = i;
            }

            if (isupper(word[i])) {

                if (!uppercase_positions.count(word[i])) {
                    uppercase_positions[word[i]] = i;
                }
            }
        }

        for (auto &entry : lowercase_positions) {

            char lower = entry.first;
            int lowerIndex = entry.second;

            char upper = toupper(lower);

            if (uppercase_positions.count(upper) &&
                lowerIndex < uppercase_positions[upper]) {

                count++;
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

    // string word = "AbBCab"
    // Output: 0

    int result = sol.numberOfSpecialChars(word);

    cout << result << endl;
}
