// 2265. Count Nodes Equal to Average of Subtree

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
    let result = 0

    function dfs(node){
        if(node === null) return [0, 0];

        let [leftSum, leftCount] = dfs(node.left)
        let [rightSum, rightCount] = dfs(node.right)

        let totalSum = leftSum + rightSum + node.val;
        let totalCount = leftCount + rightCount + 1;

        let avg = Math.floor(totalSum / totalCount)

        if(avg === node.val){
            result += 1
        }
        return [totalSum, totalCount]
    }

    dfs(root)
    
    return result
};
// [4,8,5,0,1,null,6]
let root = new TreeNode(4)
root.left = new TreeNode(8)
root.right = new TreeNode(5)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(1)
root.right.right = new TreeNode(6)
// Output: 5

// let root = TreeNode(1)
// Output: 1
console.log(averageOfSubtree(root))
