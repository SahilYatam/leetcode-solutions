class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None # entry point of the list

    # Add Nodes
    def appeand(self, value):
        new_node = Node(value)

        # Case 1: empty list
        if not self.head:
            self.head = new_node
            return
    
        # Case 2: non-empty list
        current = self.head
        while current.next:
            current = current.next
        
        current.next = new_node # type: ignore
    

    # Display / Traversal Nodes
    def display(self):
        current = self.head
        while current:
            print(current.value, end=" -> ")
            current = current.next
        print("None")


    # Delete a Node by Value
    def delete(self, value):
        # Case 1: empty list
        if not self.head:
            return
        
        # Case 2: delete head
        if self.head.value == value:
            self.head = self.head.next
            return
        
        # Case 3: delete middle or last
        current = self.head
        while current.next:
            if current.next.value == value:
                current.next = current.next.next
                return
            current = current.next


ll = LinkedList()
ll.appeand(10)
ll.appeand(20)
ll.appeand(30)
ll.appeand(40)
ll.appeand(50)

ll.display()

ll.delete(30)
ll.display()



