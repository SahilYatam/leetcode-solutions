// 155. Min Stack

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class MinStack {
public:
    vector<int> valStack;
    vector<int> minStack;
    MinStack() {
        
    }
    
    void push(int value) {
        valStack.push_back(value);
        
        if(minStack.size() == 0){
            minStack.push_back(value);
        }
        else if (value < minStack.back()){
            minStack.push_back(value);
        }
        else {
           int topVal = minStack.back();
           minStack.push_back(topVal);
        }

    }
    
    void pop() {
        valStack.pop_back();
        minStack.pop_back();
    }
    
    int top() {
        return valStack.back();
    }
    
    int getMin() {
        return minStack.back();
    }
};

int main(){
    MinStack minstack;

    minstack.push(1);
    minstack.push(2);
    minstack.push(-1);
    minstack.push(15);
    minstack.push(100);

    minstack.pop();
    int top = minstack.top();
    cout << top << endl;

    int min = minstack.getMin();
    cout << min << endl;
}