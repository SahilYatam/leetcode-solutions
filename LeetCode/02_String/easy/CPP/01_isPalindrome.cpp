// 125. Valid Palindrome

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
  bool isPalindrome(string s) {
    string st = "";
    
    for(char ch : s){
      if(isalnum(ch)){
        st += tolower(ch);
      }
    }

    int left = 0, right = st.length() -1;

    while(left < right){
      if(st[left] != st[right]){
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
};


int main(){
  Solution sol;

  string s = "Was it a car or a cat I saw?";
  // output: true

  // string s = "tab a cat";
  // output: false

  bool result = sol.isPalindrome(s);

  cout << boolalpha << result << endl;

  return 0;
}
