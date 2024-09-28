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

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  size: number;

  constructor(value: number) {
    this.val = value;
    this.left = null;
    this.right = null;
    this.size = 0;
  }
}

class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    // first node to be inserted
    if (this.root === null) {
      this.root = new TreeNode(value);
      this.root.size++;
      return;
    }

    // insert into non-empty BST
    let parent: TreeNode | null = null;
    let curr: TreeNode | null = this.root;
    let isLeftChild: boolean = true;

    while (curr !== null) {
      if (curr.val === value) return; // duplicate found

      parent = curr;
      curr.size++;

      if (value < curr.val) {
        isLeftChild = true;
        curr = curr.left;
      } else {
        isLeftChild = false;
        curr = curr.right;
      }
    }

    const newNode = new TreeNode(value);
    newNode.size++;

    if (isLeftChild) parent!.left = newNode;
    else parent!.right = newNode;
  }

  find(value: number): TreeNode | null {
    if (this.root === null) return null; // tree is empty

    let curr: TreeNode | null = this.root;
    while (curr !== null) {
      if (curr.val === value) return curr; // node found
      else if (value < curr.val) curr = curr.left;
      else curr = curr.right;
    }

    return null; // node not found
  }

  delete(value: number): boolean {
    if (this.root === null) return false; // no node to delete
    if (this.find(value) === null) return false;

    let parent: TreeNode | null = null;
    let curr: TreeNode | null = this.root;
    let isLeftChild: boolean = true;

    while (curr !== null && curr.val !== value) {
      parent = curr;
      curr.size--;
      if (value < curr.val) {
        isLeftChild = true;
        curr = curr.left;
      } else {
        isLeftChild = false;
        curr = curr.right;
      }
    }

    // Node found, now delete it
    if (curr!.left === null && curr!.right === null) {
      // Case 1: Node to delete has no children
      if (parent === null) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (curr!.left === null) {
      // Case 2: Node to delete has only right child
      if (parent === null) {
        this.root = curr!.right;
      } else if (isLeftChild) {
        parent.left = curr!.right;
      } else {
        parent.right = curr!.right;
      }
    } else if (curr!.right === null) {
      // Case 3: Node to delete has only left child
      if (parent === null) {
        this.root = curr!.left;
      } else if (isLeftChild) {
        parent.left = curr!.left;
      } else {
        parent.right = curr!.left;
      }
    } else {
      // Case 4: Node to delete has both children
      const successor = this.findMin(curr!.right);
      curr!.val = successor.val;
      curr!.right = this.deleteMin(curr!.right);
    }

    return true;
  }

  private findMin(node: TreeNode): TreeNode {
    while (node.left !== null) node = node.left;
    return node;
  }

  private deleteMin(node: TreeNode): TreeNode | null {
    if (node.left === null) return node.right;
    node.left = this.deleteMin(node.left);
    node.size =
      1 + (node.left ? node.left.size : 0) + (node.right ? node.right.size : 0);
    return node;
  }

  getRandomNode(): TreeNode | null {
    if (this.root === null) return null; // BST is empty

    let curr: TreeNode = this.root;

    while (true) {
      const randomSize = Math.floor(Math.random() * curr.size);

      let leftSize = curr.left?.size ?? 0;

      if (randomSize < leftSize) curr = curr.left!;
      else if (randomSize === leftSize) return curr;
      else curr = curr.right!;
    }
  }
}

function test() {
  const tree = new BinarySearchTree();

  console.log("Inserting nodes...");
  [20, 10, 30, 5, 15, 25, 35].forEach((val) => {
    tree.insert(val);
    console.log(`Inserted ${val}, root size: ${tree.root?.size}`);
  });

  console.log("\nTree structure after insertions:");
  printTree(tree.root);

  console.log("\nTesting random node selection:");
  for (let i = 0; i < 5; i++) {
    console.log(`Random node: ${tree.getRandomNode()?.val}`);
  }

  console.log("\nTesting find method:");
  [15, 25, 40].forEach((val) => {
    console.log(`Finding ${val}: ${tree.find(val)?.val ?? "Not found"}`);
  });

  console.log("\nTesting delete method:");
  [15, 30, 20].forEach((val) => {
    console.log(`Deleting ${val}`);
    tree.delete(val);
    console.log("Tree structure after deletion:");
    printTree(tree.root);
    console.log(`Root size after deletion: ${tree.root?.size}`);
  });

  console.log("\nFinal tree structure:");
  printTree(tree.root);
}

function printTree(node: TreeNode | null, prefix = "", isLeft = true) {
  if (node === null) return;

  console.log(
    `${prefix}${isLeft ? "├── " : "└── "}${node.val} (size: ${node.size})`
  );

  printTree(node.left, `${prefix}${isLeft ? "│   " : "    "}`, true);
  printTree(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
}

test();
