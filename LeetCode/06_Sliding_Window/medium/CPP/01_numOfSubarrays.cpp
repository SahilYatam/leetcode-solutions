// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int numOfSubarrays(vector<int>& arr, int k, int threshold) {
        int n = arr.size();
        int count = 0;

        // Step 1: calculate first window sum
        int currSum = 0;
        for(int i = 0; i < k; i++) {
            currSum += arr[i];
        }

        // Step 2: check first window
        if(currSum / k >= threshold) {
            count++;
        }

        // Step 3: slide the window
        for(int i = k; i < n; i++) {
            // remove left element
            currSum -= arr[i - k];

            // add new right element
            currSum += arr[i];

            // check average
            if(currSum / k >= threshold) {
                count++;
            }
        }

        return count;
    }
};