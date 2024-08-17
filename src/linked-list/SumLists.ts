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

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//     const dummy = new ListNode(-1);
//     let head = dummy;
//     let prev = 0;

//     const addNode = (sum) => {
//         if (sum >= 10) {
//             prev = Math.floor(sum / 10);
//             head.next = new ListNode(sum % 10);
//         }

//         else {
//             head.next = new ListNode(sum);
//         }
//     }

//     while (l1 !== null && l2 !== null) {
//         let sum = l1.val + l2.val + prev;
//         prev = 0;

//         addNode(sum);

//         head = head.next;
//         l1 = l1.next;
//         l2 = l2.next;
//     }

//     while (l1 !== null) {
//         let sum = l1.val + prev;
//         prev = 0;

//         addNode(sum);

//         head = head.next;
//         l1 = l1.next;
//     }

//     while (l2 !== null) {
//         let sum = l2.val + prev;
//         prev = 0;

//         addNode(sum);

//         head = head.next;
//         l2 = l2.next;
//     }

//     if (prev > 0) head.next = new ListNode(prev);

//     return dummy.next;
// };

// /**
// iterate through l1 and l2 simultaneously.
// - if sum >= 10, save `sum % 9` for the next calculation AND add node(sum - 10)
// - else simply use the sum for the new node

// by the end, if the carried value is not 0, we add one more node
//  */
