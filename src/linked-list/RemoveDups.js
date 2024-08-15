import ListNode from "../implementations/ListNode.js";

function removeDups(head) {
  const seen = new Set();
  let prev = null;
  let curr = head;

  while (curr !== null) {
    if (seen.has(curr.val)) {
      prev.next = curr.next;
    } else {
      seen.add(curr.val);
      prev = curr;
    }
    curr = curr.next;
  }
}

function removeDupsWithNoBuffer(head) {
  let curr = head;
  while (curr !== null) {
    let runner = curr;

    while (runner.next !== null) {
      if (curr.val === runner.next.val) {
        runner.next = runner.next.next;
      } else runner = runner.next;
    }

    curr = curr.next;
  }
}

const linkedList = new ListNode(0);
linkedList.next = new ListNode(1);
linkedList.next.next = new ListNode(2);
linkedList.next.next.next = new ListNode(2);
console.log(linkedList);
removeDupsWithNoBuffer(linkedList);
console.log(linkedList);

/*
Remove Dups! Write code to remove duplicates from an unsorted linked list.

- using a set, add nodes not encountered before
- if seen, we remove that node
*/
