// 206. Reverse Linked List

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
 };

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        
        while(curr != nullptr){
            // 1 store current next value
            ListNode* nxt = curr->next;

            // 2 point current next to the pervious
            curr->next = prev;

            // 3 store current in previous
            prev = curr;

            // 4 store next in curr
            curr = nxt;
        }
        return prev;
    }
};