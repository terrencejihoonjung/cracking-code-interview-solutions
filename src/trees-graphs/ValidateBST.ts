/**
Implement a function to check if a binary tree is a binary search tree

A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.
*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val: number = -1,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root: TreeNode | null): boolean {
  return validBST(root, -Infinity, Infinity);
}

function validBST(
  node: TreeNode | null,
  leftParent: number,
  rightParent: number
): boolean {
  if (node === null) return true;
  if (node.val >= rightParent || node.val <= leftParent) return false;
  return (
    validBST(node.left, leftParent, node.val) &&
    validBST(node.right, node.val, rightParent)
  );
}
