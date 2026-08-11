from dataclasses import dataclass
from typing import Optional

def build_tree(preorder):
    idx = -1

    def helper():
        nonlocal idx
        idx += 1

        if preorder[idx] == -1:
            return None

        root = Node(preorder[idx])
        root.left = helper()
        root.right = helper()

        return root

    return helper()

##########  preOrder traversal algorithm  ##########
def preOrder(root):
    if root == None:
        return
    
    print(root.data)
    preOrder(root.left)
    preOrder(root.right)


##########  inOrder traversal algorithm  ##########
def inOrder(root):
    if root == None:
        return
    
    inOrder(root.left)
    print(root.data)
    inOrder(root.right)


##########  postOrder traversal algorithm  ##########
def postOrder(root):
    if root == None:
        return
    
    postOrder(root.left)
    postOrder(root.right)
    print(root.data)

        
@dataclass
class Node:
    data: int
    left: Optional['Node'] = None
    right: Optional['Node'] = None


preorder = [1, 2, -1, -1, 3, 4, -1, -1, 5, -1, -1];
root = build_tree(preorder)
preOrder(root)

