// 128. Longest Consecutive Sequence

#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_set>
using namespace std;


class Solution {
public:
  int longestConsecutive(vector<int>& nums) {
    unordered_set<int> hashSet(nums.begin(), nums.end());
    int currentNum = 0, length = 0, longest = 0;

    for(int num : hashSet){
      if(hashSet.find(num - 1) != hashSet.end()) continue;

      if(hashSet.find(num - 1) == hashSet.end()){
        currentNum = num;
        length = 1;

        while(hashSet.find(currentNum + 1) != hashSet.end()){
          currentNum = currentNum + 1;
          length++;
        }
      }

      if(length > longest){
       longest = length;
      }
    }

    
    return longest;
  }
};


int main()
{

  Solution sol;

  vector<int> nums = {100,4,200,1,3,2};
  // output: 4

  // vector<int> nums = {0,3,7,2,5,8,4,6,0,1};
  // output: 9

  int result = sol.longestConsecutive(nums);
  cout << result << endl;

  return 0;
};

