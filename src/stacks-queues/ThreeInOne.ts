class FixedMultiStack {
  private numStacks: number;
  private stackCapacity: number;
  private values: (number | null)[];
  private sizes: number[];

  constructor(stackCapacity: number) {
    this.numStacks = 3;
    this.stackCapacity = stackCapacity;
    this.values = new Array(this.numStacks * this.stackCapacity).fill(null);
    this.sizes = new Array(this.numStacks).fill(0);
  }

  push(stackNum: number, value: number): void {
    if (this.isFull(stackNum)) {
      throw new Error(`Stack ${stackNum} is full`);
    }

    this.sizes[stackNum]++;
    const topIndex = this.indexOfTop(stackNum);
    this.values[topIndex] = value;
  }

  pop(stackNum: number): number | null {
    if (this.isEmpty(stackNum)) {
      throw new Error(`Stack ${stackNum} is empty`);
    }

    const topIndex = this.indexOfTop(stackNum);
    const value = this.values[topIndex];
    this.values[topIndex] = null;
    this.sizes[stackNum]--;
    return value;
  }

  peek(stackNum: number): number | null {
    if (this.isEmpty(stackNum)) {
      return null;
    }
    const topIndex = this.indexOfTop(stackNum);
    return this.values[topIndex];
  }

  isEmpty(stackNum: number): boolean {
    return this.sizes[stackNum] === 0;
  }

  isFull(stackNum: number): boolean {
    return this.sizes[stackNum] === this.stackCapacity;
  }

  indexOfTop(stackNum: number): number {
    const offset = stackNum * this.stackCapacity;
    const size = this.sizes[stackNum];
    return offset + size - 1;
  }
}

const multiStack = new FixedMultiStack(3);
multiStack.push(1, 2);
multiStack.push(1, 3);
multiStack.push(1, 1);

console.log(multiStack.indexOfTop(1), multiStack.peek(1)); // Should output: 5 1

/**
Describe how you could use a single array to implement three stacks.

- designate three sections of the array as the three stacks
- each section is dynamically sized
- circular array?
- 
*/
