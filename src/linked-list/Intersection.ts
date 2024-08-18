// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//     let sizeA = 1;
//     let sizeB = 1;

//     let currA = headA;
//     let currB = headB;

//     const moveForward = (node, num) => {
//         for (let i = 0; i < num; i++) {
//             node = node.next;
//         }
//         return node;
//     }

//     const checkNodes = (nodeA, nodeB) => {
//         while (nodeA !== null && nodeB !== null) {
//             if (nodeA === nodeB) return nodeA;
//             nodeA = nodeA.next;
//             nodeB = nodeB.next;
//         }

//         return null;
//     }

//     while (currA.next !== null) {
//         currA = currA.next;
//         sizeA++;
//     }

//     while (currB.next !== null) {
//         currB = currB.next;
//         sizeB++;
//     }

//     if (currA !== currB) return null;

//     const diff = Math.abs(sizeA - sizeB);

//     if (sizeA > sizeB) headA = moveForward(headA, diff);
//     else if (sizeA < sizeB) headB = moveForward(headB, diff);    

//     return checkNodes(headA, headB);
// };

// /**
// Using Set
// - run through headA and add node references to set.
// - run through headB and check if any of the nodes are in set
// - time complexity O(a + b), space O(a + b)

// Using the sizes of headA and headB
// - iterate through headA and headB and get their sizes
// - iterate the difference of their sizes for the longer list
// - then simultaneously iterate on both lists and check if the nodes equal each other
//     - if yes, return that node
//     - if no, return null
// - time O(a + b), space O(1)
//  */