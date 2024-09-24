/**
A binary search tree was created by traversing through an array from left to right and inserting each element. 
Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.
*/

/**
 

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

function allSequences(node: TreeNode | null): number[][] {
  const results: number[][] = [];

  if (node === null) {
    results.push([]);
    return results;
  }

  const prefix: number[] = [node.val];
  const leftSequences = allSequences(node.left);
  const rightSequences = allSequences(node.right);

  for (const left of leftSequences) {
    for (const right of rightSequences) {
      const weaved: number[][] = [];
      weave(left, right, prefix, weaved);
      results.push(...weaved);
    }
  }

  return results;
}

function weave(
  first: number[],
  second: number[],
  prefix: number[],
  weaved: number[][]
): void {
  if (first.length === 0 || second.length === 0) {
    const copy = prefix.concat(first).concat(second);
    weaved.push(copy);
    return;
  }

  // remove from first
  const firstHead = first.shift()!;
  prefix.push(firstHead);
  weave(first, second, prefix, weaved);
  first.unshift(firstHead);
  prefix.pop();

  // remove from second
  const secondHead = second.shift()!;
  prefix.push(secondHead);
  weave(first, second, prefix, weaved);
  second.unshift(secondHead);
  prefix.pop();
}

// Test function
function test() {
  // Create the BST from the example
  const root = new TreeNode(2);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);

  const result = allSequences(root);
  console.log("Possible sequences:", result);

  // Verify the result
  const expected = [
    [2, 1, 3],
    [2, 3, 1],
  ];
  console.log(
    "Is correct:",
    JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
  );
}

// Run the test
test();
