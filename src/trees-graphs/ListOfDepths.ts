/*
Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth 
(e.g., if you have a tree with depth D, you'll have D linked lists).
*/

// Definition for a binary tree node
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

// Definition for a linked list node
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

// Function signature
function createLevelLinkedList(root: TreeNode | null): ListNode[] {
  if (root === null) return [];

  const map = new Map<number, ListNode>();

  const queue: TreeNode[] = [];
  queue.push(root);
  let depth = 0;

  while (queue.length !== 0) {
    const level = queue.length;
    let dummy = new ListNode(-1);
    let curr = dummy;

    for (let i = 0; i < level; i++) {
      const node = queue.shift()!;

      curr.next = new ListNode(node.val);
      curr = curr.next;

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    map.set(depth, dummy.next!);
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
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.right = new TreeNode(6);

  // Call the function
  const result = createLevelLinkedList(root);

  // Helper function to convert LinkedList to array for easy checking
  function listToArray(head: ListNode): number[] {
    const result: number[] = [];
    let current: ListNode | null = head;
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }

  // Check the result
  const output = result.map(listToArray);
  console.log(output);

  // Verify the output
  const expected = [[1], [2, 3], [4, 5, 6]];
  console.log(
    "Test passed:",
    JSON.stringify(output) === JSON.stringify(expected)
  );
}

// Run the test
test();
