/*
Given a sorted (increasing order) array with unique integer elements, 
write an algo­rithm to create a binary search tree with minimal height.
*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  return buildBST(nums);
}

function buildBST(arr: number[]): TreeNode | null {
  if (arr.length === 0) return null;

  const mid = Math.floor(arr.length / 2);
  let newNode = new TreeNode(arr[mid]);

  newNode.left = buildBST(arr.slice(0, mid));
  newNode.right = buildBST(arr.slice(mid + 1, arr.length));

  return newNode;
}

/*
- recursively build tree top to bottom. 
- find middle element and perform two calls (left/right subarray) for left and right children
- base case: if subarray empty, return null
*/
