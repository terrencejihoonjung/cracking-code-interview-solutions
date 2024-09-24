/**
T1 and T2 are two very large binary trees, with Tl much bigger than T2. 

Create an algorithm to determine if T2 is a subtree of Tl.

A tree T2 is a subtree of Tl if there exists a node n in Tl such that the subtree of n is identical to T2. 
That is, if you cut off the tree at node n, the two trees would be identical.
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val: number = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
We are checking if t2 is a subtree of t1. 
This means, we search t1, and at any node that resembles the root of t2, we check for equality

If there are multiple nodes we have to check, there is likely some repeated work.

Brute force - whenever we encounter node that equals root of t2, check tree equality
*/

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null) return false;

  if (root.val === subRoot!.val && treesEqual(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function treesEqual(n1: TreeNode | null, n2: TreeNode | null): boolean {
  if (n1 === null && n2 === null) return true;

  return (
    n1?.val === n2?.val &&
    treesEqual(n1!.left, n2!.left) &&
    treesEqual(n1!.right, n2!.right)
  );
}
