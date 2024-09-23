/**
A binary search tree was created by traversing through an array from left to right and inserting each element.
Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.
*/
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
function allSequences(node) {
    var results = [];
    if (node === null) {
        results.push([]);
        return results;
    }
    var prefix = [node.val];
    var leftSequences = allSequences(node.left);
    var rightSequences = allSequences(node.right);
    for (var _i = 0, leftSequences_1 = leftSequences; _i < leftSequences_1.length; _i++) {
        var left = leftSequences_1[_i];
        for (var _a = 0, rightSequences_1 = rightSequences; _a < rightSequences_1.length; _a++) {
            var right = rightSequences_1[_a];
            var weaved = [];
            weave(left, right, weaved, prefix);
            results.push.apply(results, weaved);
        }
    }
    return results;
}
function weave(first, second, weaved, prefix) {
    if (first.length === 0 || second.length === 0) {
        var copy = prefix.concat(first).concat(second);
        weaved.push(copy);
        return;
    }
    var firstHead = first.shift();
    prefix.push(firstHead);
    weave(first, second, weaved, prefix);
    first.unshift(firstHead);
    prefix.pop();
    var secondHead = second.shift();
    prefix.push(secondHead);
    weave(first, second, weaved, prefix);
    second.unshift(secondHead);
    prefix.pop();
}
// Test function
function test() {
    // Create the BST from the example
    var root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    var result = allSequences(root);
    console.log("Possible sequences:", result);
    // Verify the result
    var expected = [
        [2, 1, 3],
        [2, 3, 1],
    ];
    console.log("Is correct:", JSON.stringify(result.sort()) === JSON.stringify(expected.sort()));
}
// Run the test
test();
