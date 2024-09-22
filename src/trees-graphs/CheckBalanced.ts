/**
Implement a function to check if a binary tree is balanced. 
For the purposes of this question, a balanced tree is defined to be a tree such that the heights 
of the two subtrees of any node never differ by more than one.
*/

// Definition for a binary tree node
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

/**
 compare the depths of the left and right subtree
 - recursively make sure that difference in depths between left and right subtrees are <= 1
 */

function isBalanced(root: TreeNode | null): boolean {
  return checkBalanced(root)[0];
}

function checkBalanced(node: TreeNode | null): [boolean, number] {
  if (node === null) return [true, 0];

  const [leftBalanced, leftDepth] = checkBalanced(node.left);
  const [rightBalanced, rightDepth] = checkBalanced(node.right);

  const isBalanced =
    leftBalanced && rightBalanced && Math.abs(leftDepth - rightDepth) <= 1;

  return [isBalanced, Math.max(leftDepth, rightDepth) + 1];
}
