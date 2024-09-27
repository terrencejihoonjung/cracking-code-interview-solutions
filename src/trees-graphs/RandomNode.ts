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
  // size: number;

  constructor(value: number) {
    this.val = value;
    this.left = null;
    this.right = null;
    // this.size = 1;
  }
}

/* SLOW BUT WORKING */
class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    // first node to be inserted
    if (this.root === null) {
      this.root = new TreeNode(value);
      return;
    }

    // insert into non-empty BST
    let parent: TreeNode | null = null;
    let curr: TreeNode | null = this.root;
    let isLeftChild: boolean = true;

    while (curr !== null) {
      if (curr.val === value) return; // duplicate found

      parent = curr;

      if (value < curr.val) {
        isLeftChild = true;
        curr = curr.left;
      } else {
        isLeftChild = false;
        curr = curr.right;
      }
    }

    if (isLeftChild) parent!.left = new TreeNode(value);
    else parent!.right = new TreeNode(value);
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

    // replace root.val with min value of right subtree
    // then, remove the min value node from right subtree
    if (this.root.val === value) {
      const minValue = this.getMin(this.root);
      this.root.val = minValue;
      this.removeMinNode(this.root);
    }

    let parent: TreeNode | null = null;
    let curr: TreeNode | null = this.root;
    let isLeftChild: boolean = true;

    while (curr !== null) {
      if (curr.val === value) break;

      parent = curr;
      if (value < curr.val) {
        isLeftChild = true;
        curr = curr.left;
      } else {
        isLeftChild = false;
        curr = curr.right;
      }
    }

    if (curr === null) return false; // node not found

    // check if node to delete has 0 children 1 child, or 2 children
    if (curr.left === null && curr.right === null) {
      if (isLeftChild) parent!.left = null;
      else {
        parent!.right = null;
      }
    } else if (curr.left !== null && curr.right === null) {
      if (isLeftChild) parent!.left = curr.left;
      else parent!.right = curr.left;
    } else if (curr.left === null && curr.right !== null) {
      if (isLeftChild) parent!.left = curr.right;
      else parent!.right = curr.right;
    }

    // both children are not null
    else {
      const min = this.getMin(curr.right!);
      curr.val = min;
      this.removeMinNode(curr.right!);
    }

    return true;
  }

  public getMin(node: TreeNode): number {
    if (node.left === null) return node.val;
    return this.getMin(node.left);
  }

  public removeMinNode(node: TreeNode): void {
    let parent: TreeNode | null = null;
    let curr: TreeNode | null = node;

    while (curr !== null && curr.left !== null) {
      parent = curr;
      curr = curr.left;
    }

    // we can safely remove node
    if (curr.right === null) parent!.left = null;
    // recursively reorder tree
    else {
      const minVal = this.getMin(curr.right);
      curr.val = minVal;
      this.removeMinNode(curr.right);
    }
  }

  getRandomNode(): TreeNode | null {
    if (this.root === null) return null; // BST is empty

    // get all nodes
    const nodes: TreeNode[] = [];
    this.convertTreeToList(this.root, nodes);

    // using nodes.length, randomly pick an index and return that node
    const len = nodes.length;
    let randomIndex = Math.floor(Math.random() * len);
    return nodes[randomIndex];
  }

  convertTreeToList(node: TreeNode, list: TreeNode[]): void {
    if (node === null) return;

    list.push(node);

    this.convertTreeToList(node.left!, list);
    this.convertTreeToList(node.right!, list);
  }
}

/* FAST AND WORKING */
// class BinarySearchTree {
//   root: TreeNode | null;

//   constructor() {
//     this.root = null;
//   }

//   insert(value: number): void {
//     // if root null, we insert first node
//     if (this.root === null) {
//       this.root = new TreeNode(value);
//       return;
//     }

//     // else, we traverse and insert
//     let curr: TreeNode | null = this.root;
//     let parent: TreeNode | null = null;

//     while (curr !== null) {
//       curr.size++;
//       parent = curr;

//       if (value === curr.val) {
//         const randomDirection = Math.round(Math.random());
//         if (randomDirection === 0) curr = curr.left;
//         else if (randomDirection === 1) curr = curr.right;
//       } else if (value < curr.val) curr = curr.left;
//       else curr = curr.right;
//     }

//     const newNode = new TreeNode(value);
//     if (value < parent!.val) parent!.left = newNode;
//     else {
//       parent!.right = newNode;
//     }
//   }

//   find(value: number): TreeNode | null {
//     let curr: TreeNode | null = this.root;

//     while (curr !== null) {
//       if (curr.val === value) return curr;
//       else if (value < curr.val) curr = curr.left;
//       else curr = curr.right;
//     }

//     return null;
//   }

//   delete(value: number): boolean {
//     // no node to delete
//     if (!this.root) return false;

//     let current: TreeNode | null = this.root;
//     let parent: TreeNode | null = null;
//     let isLeftChild = true;

//     // find the node to delete (curr)
//     while (current && current.val !== value) {
//       parent = current;
//       if (value < current.val) {
//         isLeftChild = true;
//         current = current.left;
//       } else {
//         isLeftChild = false;
//         current = current.right;
//       }
//     }

//     if (!current) return false; // no node to delete

//     // Case 1: Node to be deleted has no children
//     if (current.left === null && current.right === null) {
//       if (current === this.root) {
//         this.root = null;
//       } else if (isLeftChild) {
//         parent!.left = null;
//       } else {
//         parent!.right = null;
//       }
//     }

//     // Case 2: Node to be deleted has only one child
//     else if (current.right === null) {
//       if (isLeftChild) parent!.left = current.left;
//       else parent!.right = current.left;
//     } else if (current.left === null) {
//       if (isLeftChild) parent!.left = current.right;
//       else parent!.right = current.right;
//     }

//     // Case 3: Node to be deleted has two children
//     else {
//       let successor = this.findMinNode(current.right);
//       if (current === this.root) {
//         this.root = successor;
//       } else if (isLeftChild) {
//         parent!.left = successor;
//       } else {
//         parent!.right = successor;
//       }

//       successor.left = current.left;
//       if (successor !== current.right) {
//         this.findParent(current.right, successor.val)!.left = successor.right;
//         successor.right = current.right;
//       }
//     }

//     // Update sizes along the path
//     this.updateSizes(this.root, value);

//     return true;
//   }

//   private findMinNode(node: TreeNode): TreeNode {
//     while (node.left !== null) {
//       node = node.left;
//     }
//     return node;
//   }

//   private findParent(node: TreeNode, value: number): TreeNode | null {
//     if (node.left?.val === value || node.right?.val === value) return node;
//     if (value < node.val) return this.findParent(node.left!, value);
//     return this.findParent(node.right!, value);
//   }

//   private updateSizes(node: TreeNode | null, value: number): void {
//     if (node === null) return;
//     if (node.val !== value) node.size--;
//     if (value < node.val) this.updateSizes(node.left, value);
//     else if (value > node.val) this.updateSizes(node.right, value);
//   }

//   getRandomNode(): TreeNode | null {
//     if (this.root === null) return null;

//     // generate random size from 1 to size
//     let random = Math.floor(Math.random() * this.root.size) + 1;

//     // perform binary search to find node with size === random size
//     // if size < random size, go left, else if size < random size, go right
//     let curr: TreeNode | null = this.root;
//     while (curr !== null) {
//       if (!curr.left) {
//         if (random === 1) return curr;
//         curr = curr.right;
//         random--;
//       } else if (random <= curr.left.size) {
//         curr = curr.left;
//       } else {
//         random -= curr.left.size + 1;
//         curr = curr.right;
//       }
//     }

//     return null;
//   }
// }

function test() {
  const tree = new BinarySearchTree();
  tree.insert(20);
  tree.insert(10);
  tree.insert(30);
  tree.insert(5);
  tree.insert(15);
  tree.insert(25);
  tree.insert(35);

  console.log("Random node:", tree.getRandomNode()?.val);
  console.log("Random node:", tree.getRandomNode()?.val);
  console.log("Random node:", tree.getRandomNode()?.val);

  console.log("Finding 15:", tree.find(15)?.val);

  tree.delete(15);
  console.log("After deleting 15, finding 15:", tree.find(15)?.val);
}

test();
