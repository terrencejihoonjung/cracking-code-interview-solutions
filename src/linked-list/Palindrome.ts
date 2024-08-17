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

// function isPalindrome(head: ListNode | null): boolean {
//   if (head.next === null) return true;

//   const getMiddle = (node) => {
//     let slow = node;
//     let fast = node;

//     while (fast.next !== null && fast.next.next !== null) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }

//     return slow;
//   };

//   const reverseList = (node) => {
//     let prev = null;
//     let curr = node;
//     let next = null;

//     while (curr !== null) {
//       next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }

//     return prev;
//   };

//   let mid = getMiddle(head);
//   let reversedHead = reverseList(mid.next);

//   while (reversedHead !== null) {
//     if (head.val !== reversedHead.val) return false;

//     head = head.next;
//     reversedHead = reversedHead.next;
//   }

//   return true;
// }

// /*
// Straightforward Approach
// - simply reformat the linked list into an array of integers and then use
//   two pointers to check if it is a palindrome
// - requires 2 passes of the input
// - O(n) time complexity, O(n) space complexity

// Another Approach
// - Create a copy of the lnked list and reverse it
// - compare equality of linked lists' nodes
// - O(n) time complexity, O(n) space complexity

// Clever Approach
// - Iterate to the middle of linked list
// - reverse the 2nd half of the list
// - compare values from head of original list and head of reversed list
// - O(n) time complexity, O(1) space complexity
// */
