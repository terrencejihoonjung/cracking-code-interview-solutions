class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const poppedValue = this.stack.pop();

    if (
      this.minStack.length > 0 &&
      this.minStack[this.minStack.length - 1] === poppedValue
    ) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
utilize two stacks: one normal, and one min stack
- push: push value to min stack ONLY if minStack is empty or top value is greater
- pop: pop value off minStack UNTIL popped value from normal stack is removed from minStack
- getMin: peek minStack

minStack: -2
stack: -2, 0, -1
 */
