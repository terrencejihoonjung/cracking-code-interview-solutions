class DinnerPlates {
  private capacity: number;
  private stacks: number[][];
  private leftMost: number;
  private rightMost: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.stacks = [];
    this.leftMost = 0;
    this.rightMost = -1;
  }

  push(val: number): void {
    // check if leftMost is full
    while (
      this.leftMost <= this.rightMost &&
      this.stacks[this.leftMost].length === this.capacity
    ) {
      this.leftMost++;
    }

    // push a new stack
    if (this.leftMost > this.rightMost) {
      this.stacks.push([]);
      this.rightMost++;
    }

    // push value to stack
    this.stacks[this.leftMost].push(val);
    console.log(this.stacks);
  }

  pop(): number {
    if (this.rightMost === -1) return -1;

    // check if stack is empty
    while (this.rightMost >= 0 && this.stacks[this.rightMost].length === 0) {
      this.rightMost--;
    }

    if (this.rightMost === -1) return -1;

    const popped = this.stacks[this.rightMost].pop()!;

    return popped;
  }

  popAtStack(index: number): number {
    if (index > this.rightMost || this.stacks[index].length === 0) return -1;

    const popped = this.stacks[index].pop()!;

    // Update leftMost if necessary
    if (index < this.leftMost) {
      this.leftMost = index;
    }

    // Update rightMost if necessary
    if (index === this.rightMost && this.stacks[index].length === 0) {
      while (this.rightMost >= 0 && this.stacks[this.rightMost].length === 0) {
        this.rightMost--;
      }
    }

    return popped;
  }
}

/**
- array of stacks
- capacity
- leftMost and rightMost indices

- push: push to leftMost stack
    - check if leftMost <= rightMost and is full -> increment leftMost
    - if (leftMost > rightMost) -> push new array to stack + update rightMost
    - push to leftMost

- pop: pop from rightMost stack
    - check if rightMost's stack is empty
        - decrement rightMost
    - pop from rightMost

- popAtStack: get stack using index
    - get stack at index
    - if stack is empty return -1
    - else, pop from stack
    - update leftMost
 */
