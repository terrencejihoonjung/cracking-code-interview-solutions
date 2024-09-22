var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right, parent) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
        this.parent = parent === undefined ? null : parent;
    }
    return TreeNode;
}());
/**
Write an algorithm to find the "next" node (i.e., in-order successor)
of a given node in a binary search tree.
You may assume that each node has a link to its parent.

Brainstorm:
What are the cases for a "next" node?
- in the subtree that it searched
- not in the subtree that it searched, meaning it has to go to the other subtree

How do we check that we found the next node?
- curr node has a right child

What's the plan?
- if the given node doesn't have a right node, we bubble up to the root of the tree and return its right node.

Technically?
*/
function inorderSuccessor(node) {
    if (node.right) {
        node = node.right;
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    while (node.parent && node === node.parent.right) {
        node = node.parent;
    }
    return node.parent;
}
function findLeftMostNode(node) {
    if (node === null)
        return null;
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}
// Example usage:
function test() {
    var _a, _b;
    // Create a sample BST
    //       4
    //     /   \
    //    2     6
    //   / \   / \
    //  1   3 5   7
    var root = new TreeNode(4);
    root.left = new TreeNode(2, null, null, root);
    root.right = new TreeNode(6, null, null, root);
    root.left.left = new TreeNode(1, null, null, root.left);
    root.left.right = new TreeNode(3, null, null, root.left);
    root.right.left = new TreeNode(5, null, null, root.right);
    root.right.right = new TreeNode(7, null, null, root.right);
    // Test cases
    console.log((_a = inorderSuccessor(root.left)) === null || _a === void 0 ? void 0 : _a.val); // Expected: 3
    console.log((_b = inorderSuccessor(root)) === null || _b === void 0 ? void 0 : _b.val); // Expected: 5
    console.log(inorderSuccessor(root.right.right)); // Expected: null
}
test();
