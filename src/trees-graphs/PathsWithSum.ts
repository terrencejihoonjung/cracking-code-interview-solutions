/**
You are given a binary tree in which each node contains an integer value (which might be positive or negative). 
Design an algorithm to count the number of paths that sum to a given value. 
The path does not need to start or end at the root or a leaf, but it must go downwards 
(traveling only from parent nodes to child nodes).

Hints:#6, #14, #52, #68, #77, #87, #94, #103, #108, #115
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

// BRUTE FORCE
// function pathSum(root: TreeNode | null, targetSum: number): number {
//   if (root === null) return 0;

//   let count = 0;

//   // count valid paths from a node
//   const findPaths = (node: TreeNode | null, sum: number): void => {
//     if (node === null) return;

//     sum += node.val;
//     if (sum === targetSum) count++;

//     findPaths(node.left, sum);
//     findPaths(node.right, sum);
//   };

//   findPaths(root, 0);

//   // for each node, run findPaths
//   count += pathSum(root.left, targetSum) + pathSum(root.right, targetSum);

//   return count;
// }

// OPTIMIZED
function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root === null) return 0;

  let count = 0;
  let map = new Map<number, number>();
  map.set(0, 1);

  const dfs = (node: TreeNode | null, currSum: number): void => {
    if (node === null) return;

    // update current sum
    currSum += node.val;

    // check map for matches
    if (map.has(currSum - targetSum)) {
      count += map.get(currSum - targetSum)!;
    }

    // update map
    if (!map.has(currSum)) map.set(currSum, 0);
    map.set(currSum, map.get(currSum)! + 1);

    dfs(node.left, currSum);
    dfs(node.right, currSum);

    map.set(currSum, map.get(currSum)! - 1);
    if (map.get(currSum) === 0) map.delete(currSum);
  };

  dfs(root, 0);

  return count;
}
