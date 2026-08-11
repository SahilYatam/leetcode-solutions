// 3304. Find the K-th Character in String Game I

#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_set>
using namespace std;


class Solution {
public:
    char NextAlphabet(char chr) {
        if(chr == 'z'){
            return 'a';
        }

        return chr + 1;
    }

    char findCharacter(int length, int k){
        if(length == 1){
            return 'a';
        }

        int half = length / 2;

        if(k <= half){
            return findCharacter(half, k);
        }
        else {
            char ch = findCharacter(half, k - half);
            return NextAlphabet(ch);
        }
    }

    char kthCharacter(int k) {
        int length = 1;
        while(length < k){
            length = length * 2;
        }

        return findCharacter(length, k);
    }
};

int main(){
    Solution sol;

    int k = 5;
    // Output: "b"

    // int k = 10;
    // Output: "c"

    char result = sol.kthCharacter(k);
    cout << result << endl;

    return 0;
}