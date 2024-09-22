class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  parent: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null,
    parent?: TreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.parent = parent === undefined ? null : parent;
  }
}

/**
Write an algorithm to find the "next" node (i.e., in-order successor) 
of a given node in a binary search tree. 
You may assume that each node has a link to its parent.

Brainstorm:
What are the cases for a "next" node? 
- right child node exists -> find left most node (could be the node itself or a left most node)
- bubble up and find a right parent node.
- bubble up and reach the true root node, at which we know there is no next node -> null

How do we check that we found the next node?
- check if there is a right child node first
- if not right child, we bubble up
    - keep bubbling up ONLY if the curent node is a right child of the parent. 
    - if the current node is a left child, we simply return the parent node
- if we reach the root node, we return the parent node, which would be null

What's the plan?
- function for finding leftMost node
- function for bubbling up

Technically?
*/

function inorderSuccessor(node: TreeNode | null): TreeNode | null {
  if (node!.right) {
    return findLeftMostNode(node!.right);
  }

  return bubbleUp(node!);
}

// Finds left most node of a BST given a root
function findLeftMostNode(node: TreeNode): TreeNode | null {
  while (node.left !== null) {
    node = node!.left;
  }

  return node;
}

// Bubbles up to root node
function bubbleUp(node: TreeNode): TreeNode | null {
  while (node!.parent && node === node!.parent.right) {
    node = node!.parent;
  }

  return node.parent;
}

// Example usage:
function test() {
  // Create a sample BST
  //       4
  //     /   \
  //    2     6
  //   / \   / \
  //  1   3 5   7
  let root = new TreeNode(4);
  root.left = new TreeNode(2, null, null, root);
  root.right = new TreeNode(6, null, null, root);
  root.left.left = new TreeNode(1, null, null, root.left);
  root.left.right = new TreeNode(3, null, null, root.left);
  root.right.left = new TreeNode(5, null, null, root.right);
  root.right.right = new TreeNode(7, null, null, root.right);

  // Test cases
  console.log(inorderSuccessor(root.left)?.val); // Expected: 3
  console.log(inorderSuccessor(root)?.val); // Expected: 5
  console.log(inorderSuccessor(root.right.right)); // Expected: null
}

test();
