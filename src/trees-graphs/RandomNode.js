/**
You are implementing a binary tree class from scratch
- insert
- find
- delete
- getRandomNode
    - returns a random node from the tree.
    - All nodes should be equally likely to be chosen.

Design and implement an algorithm for getRandomNode, and explain how you would implement the rest of the methods
Hints: #42, #54, #62, #75, #89, #99, #112, #119
*/
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.val = value;
        this.left = null;
        this.right = null;
        this.size = 0;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        // first node to be inserted
        if (this.root === null) {
            this.root = new TreeNode(value);
            this.root.size++;
            return;
        }
        // insert into non-empty BST
        var parent = null;
        var curr = this.root;
        var isLeftChild = true;
        while (curr !== null) {
            if (curr.val === value)
                return; // duplicate found
            parent = curr;
            curr.size++;
            if (value < curr.val) {
                isLeftChild = true;
                curr = curr.left;
            }
            else {
                isLeftChild = false;
                curr = curr.right;
            }
        }
        var newNode = new TreeNode(value);
        newNode.size++;
        if (isLeftChild)
            parent.left = newNode;
        else
            parent.right = newNode;
    };
    BinarySearchTree.prototype.find = function (value) {
        if (this.root === null)
            return null; // tree is empty
        var curr = this.root;
        while (curr !== null) {
            if (curr.val === value)
                return curr; // node found
            else if (value < curr.val)
                curr = curr.left;
            else
                curr = curr.right;
        }
        return null; // node not found
    };
    BinarySearchTree.prototype.delete = function (value) {
        if (this.root === null)
            return false; // no node to delete
        if (this.find(value) === null)
            return false;
        var parent = null;
        var curr = this.root;
        var isLeftChild = true;
        while (curr !== null && curr.val !== value) {
            parent = curr;
            curr.size--;
            if (value < curr.val) {
                isLeftChild = true;
                curr = curr.left;
            }
            else {
                isLeftChild = false;
                curr = curr.right;
            }
        }
        // Node found, now delete it
        if (curr.left === null && curr.right === null) {
            // Case 1: Node to delete has no children
            if (parent === null) {
                this.root = null;
            }
            else if (isLeftChild) {
                parent.left = null;
            }
            else {
                parent.right = null;
            }
        }
        else if (curr.left === null) {
            // Case 2: Node to delete has only right child
            if (parent === null) {
                this.root = curr.right;
            }
            else if (isLeftChild) {
                parent.left = curr.right;
            }
            else {
                parent.right = curr.right;
            }
        }
        else if (curr.right === null) {
            // Case 3: Node to delete has only left child
            if (parent === null) {
                this.root = curr.left;
            }
            else if (isLeftChild) {
                parent.left = curr.left;
            }
            else {
                parent.right = curr.left;
            }
        }
        else {
            // Case 4: Node to delete has both children
            var successor = this.findMin(curr.right);
            curr.val = successor.val;
            curr.right = this.deleteMin(curr.right);
        }
        return true;
    };
    BinarySearchTree.prototype.findMin = function (node) {
        while (node.left !== null)
            node = node.left;
        return node;
    };
    BinarySearchTree.prototype.deleteMin = function (node) {
        if (node.left === null)
            return node.right;
        node.left = this.deleteMin(node.left);
        node.size =
            1 + (node.left ? node.left.size : 0) + (node.right ? node.right.size : 0);
        return node;
    };
    BinarySearchTree.prototype.getRandomNode = function () {
        var _a, _b;
        if (this.root === null)
            return null; // BST is empty
        var curr = this.root;
        while (true) {
            var randomSize = Math.floor(Math.random() * curr.size);
            var leftSize = (_b = (_a = curr.left) === null || _a === void 0 ? void 0 : _a.size) !== null && _b !== void 0 ? _b : 0;
            if (randomSize < leftSize)
                curr = curr.left;
            else if (randomSize === leftSize)
                return curr;
            else
                curr = curr.right;
        }
    };
    return BinarySearchTree;
}());
function test() {
    var _a;
    var tree = new BinarySearchTree();
    console.log("Inserting nodes...");
    [20, 10, 30, 5, 15, 25, 35].forEach(function (val) {
        var _a;
        tree.insert(val);
        console.log("Inserted ".concat(val, ", root size: ").concat((_a = tree.root) === null || _a === void 0 ? void 0 : _a.size));
    });
    console.log("\nTree structure after insertions:");
    printTree(tree.root);
    console.log("\nTesting random node selection:");
    for (var i = 0; i < 5; i++) {
        console.log("Random node: ".concat((_a = tree.getRandomNode()) === null || _a === void 0 ? void 0 : _a.val));
    }
    console.log("\nTesting find method:");
    [15, 25, 40].forEach(function (val) {
        var _a, _b;
        console.log("Finding ".concat(val, ": ").concat((_b = (_a = tree.find(val)) === null || _a === void 0 ? void 0 : _a.val) !== null && _b !== void 0 ? _b : "Not found"));
    });
    console.log("\nTesting delete method:");
    [15, 30, 20].forEach(function (val) {
        var _a;
        console.log("Deleting ".concat(val));
        tree.delete(val);
        console.log("Tree structure after deletion:");
        printTree(tree.root);
        console.log("Root size after deletion: ".concat((_a = tree.root) === null || _a === void 0 ? void 0 : _a.size));
    });
    console.log("\nFinal tree structure:");
    printTree(tree.root);
}
function printTree(node, prefix, isLeft) {
    if (prefix === void 0) { prefix = ""; }
    if (isLeft === void 0) { isLeft = true; }
    if (node === null)
        return;
    console.log("".concat(prefix).concat(isLeft ? "├── " : "└── ").concat(node.val, " (size: ").concat(node.size, ")"));
    printTree(node.left, "".concat(prefix).concat(isLeft ? "│   " : "    "), true);
    printTree(node.right, "".concat(prefix).concat(isLeft ? "│   " : "    "), false);
}
test();
