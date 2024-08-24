class MultiStack {
  private stackNum: number;
  private stackCapacity: number;
  private sizes: number[];
  private values: (number | null)[];

  constructor(stackNum: number, stackCapacity: number = 3) {
    this.stackNum = stackNum;
    this.stackCapacity = stackCapacity;
    this.sizes = new Array(this.stackNum).fill(0);
    this.values = new Array(this.stackNum * this.stackCapacity).fill(null);
  }

  push(stackNum: number, value: number) {
    // check if stack is full
    if (this.isFull(stackNum))
      throw new Error(`Cannot push. Stack ${stackNum} is full`);

    // push value
    const index = this.getTopIndex(stackNum);
    this.values[index + 1] = value;
    this.sizes[stackNum]++;
  }

  pop(stackNum: number) {
    // check if stack is empty
    if (this.isEmpty(stackNum))
      throw new Error(`Cannot pop. Stack ${stackNum} is empty`);

    // pop value
    const index = this.getTopIndex(stackNum);
    this.values[index] = null;
    this.sizes[stackNum]--;
  }

  peek(stackNum: number) {
    return this.values[this.getTopIndex(stackNum)];
  }

  isFull(stackNum: number) {
    return this.sizes[stackNum] === this.stackCapacity;
  }

  isEmpty(stackNum: number) {
    return this.sizes[stackNum] === 0;
  }

  getTopIndex(stackNum: number) {
    const size = this.sizes[stackNum];
    const offset = this.stackCapacity * stackNum;
    return size + offset - 1;
  }
}

const multiStack = new MultiStack(3);
multiStack.push(0, 1);
multiStack.push(0, 2);
multiStack.push(0, 3);

multiStack.push(1, 4);
multiStack.push(1, 5);
multiStack.push(1, 6);

multiStack.push(2, 7);
multiStack.push(2, 8);
multiStack.push(2, 9);

console.log(multiStack.peek(0)); // 3
console.log(multiStack.peek(1)); // 6
console.log(multiStack.peek(2)); // 9

multiStack.pop(0);
multiStack.pop(1);
multiStack.pop(2);

console.log(multiStack.peek(0)); // 2
console.log(multiStack.peek(1)); // 5
console.log(multiStack.peek(2)); // 8

/**
Describe how you could use a single array to implement three stacks.

- designate three sections of the array as the three stacks
- numStack (number of stacks), stack capacity, values, sizes (helps keep track of ratio of slots) 
*/
