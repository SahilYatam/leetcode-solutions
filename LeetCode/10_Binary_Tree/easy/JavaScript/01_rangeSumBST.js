// 938. Range Sum of BST

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    if(root === null){
        return 0
    }

    if(root.val < low){
        return rangeSumBST(root.right, low, high)
    }
    if(root.val > high){
        return rangeSumBST(root.left, low, high)
    }

    return(
        root.val
        + rangeSumBST(root.left, low, high)
        + rangeSumBST(root.right, low, high)
    )

};

let root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32

// let root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
