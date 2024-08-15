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

// function partition(head: ListNode | null, x: number): ListNode | null {
//     if (head === null) return null;

//     let leftPartition = new ListNode(-1);
//     let rightPartition = new ListNode(-1);
//     let dummy = leftPartition;
//     let dummy2 = rightPartition;

//     while (head !== null) {
//         if (head.val < x) {
//             leftPartition.next = new ListNode(head.val);
//             leftPartition = leftPartition.next;
//         } else {
//             rightPartition.next = new ListNode(head.val);
//             rightPartition = rightPartition.next;
//         }
//         head = head.next;
//     }

//     if (leftPartition.val === -1) {
//         return dummy2.next
//     };

//     leftPartition.next = dummy2.next;

//     return dummy.next;
// };

// /*
// if current node is less than x, add to head pointer.
// if current node is greater than or equal to x, add to tail pointer

// then connect the two partitions and return head
// */
