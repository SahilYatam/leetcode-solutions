#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <unordered_map>

using namespace std;

class Solution
{
public:
    vector<vector<string>> groupAnagrams(vector<string> &strs)
    {
        unordered_map<string, vector<string>> groups;

        for (string word : strs)
        {
            vector<int> count(26, 0);

            for (char ch : word)
            {
                count[ch - 'a']++;
            }

            string key = "";

            for (int num : count)
            {
                key += to_string(num) + "#";
            }

            groups[key].push_back(word);
        }

        vector<vector<string>> result;

        for (auto pair : groups)
        {
            result.push_back(pair.second);
        }

        return result;
    }
};

int main()
{
    Solution sol;

    vector<string> strs = {"act", "pots", "tops", "cat", "stop", "hat"};
    vector<vector<string>> result = sol.groupAnagrams(strs);

    for (vector<string>& group : result) {
        for (const string& word : group){
            cout << word << endl;
        }
        cout << endl;
    }

    return 0;
}