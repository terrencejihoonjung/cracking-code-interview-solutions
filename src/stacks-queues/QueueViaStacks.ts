class MyQueue {
  private stack1: number[];
  private stack2: number[];

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x: number): void {
    this.fill(this.stack2, this.stack1);
    this.stack1.push(x);
    this.fill(this.stack1, this.stack2);
  }

  pop(): number {
    return this.stack2.pop()!;
  }

  peek(): number {
    return this.stack2[this.stack2.length - 1];
  }

  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  fill(stack1: number[], stack2: number[]): void {
    while (stack1.length !== 0) {
      const popped = stack1.pop()!;
      stack2.push(popped);
    }
  }
}

/**
Implement a MyQueue class which implements a queue using two stacks.
- first stack is for temporary operations
- second stack stores data 
 */
