// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// function removeNthFromEnd(head: ListNode, n: number): ListNode | null {
//   if (head.next === null && n === 1) return null;

//   let slow: ListNode = head;
//   let fast: ListNode = head;

//   for (let i = 0; i < n; i++) {
//     fast = fast.next;
//   }

//   if (fast === null) return head.next;

//   while (fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next;
//   }

//   slow.next = slow.next.next;

//   return head;
// }
