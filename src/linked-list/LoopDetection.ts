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

// function detectCycle(head: ListNode | null): ListNode | null {
//     if (head === null || head.next === null) return null;

//     // 1st phase of Floyd's Tortoise and Hare
//     let hasCycle = false;
//     let slow = head;
//     let fast = head;
//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow === fast) {
//             hasCycle = true;
//             slow = head;
//             break;
//         }
//     }

//     if (!hasCycle) return null;

//     // 2nd phase
//     while (slow !== fast) {
//         slow = slow.next;
//         fast = fast.next;
//     }

//     return slow;
// };

// /**

//  */
