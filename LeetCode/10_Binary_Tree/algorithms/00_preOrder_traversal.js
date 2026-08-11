// ========== PREORDER TRAVERSAL ==========

/**
 * @param {number[]} preorder
 */

function buildTree(preorder) {
    let idx = -1;

    function helper() {
        idx++;

        if (preorder[idx] === -1) {
            return null;
        }

        let root = new Node(preorder[idx]);
        root.left = helper();
        root.right = helper();

        return root;
    }

    return helper();
}

// ========== preOrder traversal algorithm ==========
// root, left, right
function preOrder(root) {
    if (root === null) {
        return;
    }
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}
/*
Example for this arr [2, 1, 3]
▶️ Preorder execution

Steps:
    1. Visit 2
    2. Go left → visit 1
    3. Go right → visit 3

    Output:
    2 1 3
*/

// ========== inOrder traversal algorithm ==========
// left, root, right
function inOrder(root) {
    if (root === null) {
        return;
    }

    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
}

/*
Example for this arr [2, 1, 3]
▶️ Inorder execution

Steps:
    1. Go left → visit 1
    2. Visit 2
    3. Go right → visit 3

    Output:
    1 2 3
*/

// ========== postOrder traversal algorithm ==========
// left, right, root
function postOrder(root) {
    if (root === null) {
        return;
    }

    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
}

// ========== Level Order traversal algorithm ==========
function levelOrder(root) {
    if (root === null) return;

    let q = [];
    q.push(root);

    while (q.length > 0) {
        let curr = q.shift(); // dequeue

        console.log(curr.data);

        if (curr.left !== null) {
            q.push(curr.left);
        }
        if (curr.right !== null) {
            q.push(curr.right);
        }
    }
}

function levelOrerElementSideBySide(root) {
    if (root === null) return;

    let q = [];
    q.push(root);
    q.push(null); // level separator

    while (q.length > 0) {
        let curr = q.shift();

        if (curr === null) {
            if (q.length > 0) {
                console.log(); // new line
                q.push(null); // add separator for next level
                continue;
            } else {
                break;
            }
        }

        process.stdout.write(curr.data + " "); // print side by side

        if (curr.left !== null) {
            q.push(curr.left);
        }
        if (curr.right !== null) {
            q.push(curr.right);
        }
    }
    console.log(); // final newline
}

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let preorder = [1, 2, -1, -1, 3, 4, -1, -1, 5, -1, -1];
// let preorder = [1, 2, -1, -1, 3, -1, -1]
// let preorder = [2, 1, -1, -1, 3, -1, -1]
let root = buildTree(preorder);
// preOrder(root)
// inOrder(root)
postOrder(root)
// levelOrder(root)
// levelOrerElementSideBySide(root);
