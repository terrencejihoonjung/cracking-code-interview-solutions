/*
Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth
(e.g., if you have a tree with depth D, you'll have D linked lists).
*/
// Definition for a binary tree node
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        if (val === void 0) { val = 0; }
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.val = val;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
// Definition for a linked list node
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        if (val === void 0) { val = 0; }
        if (next === void 0) { next = null; }
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
// Function signature
function createLevelLinkedList(root) {
    if (root === null)
        return [];
    var map = new Map();
    var queue = [];
    queue.push(root);
    var depth = 0;
    while (queue.length !== 0) {
        var level = queue.length;
        var dummy = new ListNode(-1);
        var curr = dummy;
        for (var i = 0; i < level; i++) {
            var node = queue.shift();
            curr.next = new ListNode(node.val);
            curr = curr.next;
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        map.set(depth, dummy.next);
        depth++;
    }
    return Array.from(map.values());
}
/*
Use hashmap to map each level to a linked list
- run BFS to create a linked list at each level
- once BFS is exhausted, we are done -> return array of the linked lists
*/
// Test case
function test() {
    // Create a sample binary tree
    //      1
    //    /   \
    //   2     3
    //  / \     \
    // 4   5     6
    var root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.right = new TreeNode(6);
    // Call the function
    var result = createLevelLinkedList(root);
    // Helper function to convert LinkedList to array for easy checking
    function listToArray(head) {
        var result = [];
        var current = head;
        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
    // Check the result
    var output = result.map(listToArray);
    console.log(output);
    // Verify the output
    var expected = [[1], [2, 3], [4, 5, 6]];
    console.log("Test passed:", JSON.stringify(output) === JSON.stringify(expected));
}
// Run the test
test();
