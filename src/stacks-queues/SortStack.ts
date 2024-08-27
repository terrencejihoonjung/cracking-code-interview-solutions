function sort(stack: number[]): void {
  if (stack.length === 0) return;

  let temp: number[] = [];
  while (stack.length !== 0) {
    let val: number = stack.pop()!;

    while (temp.length > 0 && temp[temp.length - 1] > val) {
      const popped: number = temp.pop()!;
      stack.push(popped);
    }

    temp.push(val);
  }

  while (temp.length !== 0) {
    const popped = temp.pop()!;
    stack.push(popped);
  }
}

const stack = [1, 2, 3, 4, 5, 3, 2, 1, 9, 5, 2, 6, 12, 1, 1, 6, 2, 6];
sort(stack);
console.log(stack);

/**
Write a program to sort a stack such that the smallest items are on the top. 
You can use an additional temporary stack, but you may not copy the elements into 
any other data structure (such as an array). The stack supports the following 
operations: push, pop, peek, and isEmpty.


Brute force
- use .sort method on stack in descending order
- time O(nlogn)

Without using sort method:
- use temporary stack to keep monotonically increasing stack
- if lesser value is encountered
    - store it 
    - pop off temp stack and push to original stack until stored value is < prev and > top
    - continue alg
- time O(n^2), space O(n)
*/
