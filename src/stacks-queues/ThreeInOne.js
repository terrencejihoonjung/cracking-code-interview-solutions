var FixedMultiStack = /** @class */ (function () {
    function FixedMultiStack(stackCapacity) {
        this.numStacks = 3;
        this.stackCapacity = stackCapacity;
        this.values = new Array(this.numStacks * this.stackCapacity).fill(null);
        this.sizes = new Array(this.numStacks).fill(0);
    }
    FixedMultiStack.prototype.push = function (stackNum, value) {
        if (this.isFull(stackNum)) {
            throw new Error("Stack ".concat(stackNum, " is full"));
        }
        this.sizes[stackNum]++;
        var topIndex = this.indexOfTop(stackNum);
        this.values[topIndex] = value;
    };
    FixedMultiStack.prototype.pop = function (stackNum) {
        if (this.isEmpty(stackNum)) {
            throw new Error("Stack ".concat(stackNum, " is empty"));
        }
        var topIndex = this.indexOfTop(stackNum);
        var value = this.values[topIndex];
        this.values[topIndex] = null;
        this.sizes[stackNum]--;
        return value;
    };
    FixedMultiStack.prototype.peek = function (stackNum) {
        if (this.isEmpty(stackNum)) {
            return null;
        }
        var topIndex = this.indexOfTop(stackNum);
        return this.values[topIndex];
    };
    FixedMultiStack.prototype.isEmpty = function (stackNum) {
        return this.sizes[stackNum] === 0;
    };
    FixedMultiStack.prototype.isFull = function (stackNum) {
        return this.sizes[stackNum] === this.stackCapacity;
    };
    FixedMultiStack.prototype.indexOfTop = function (stackNum) {
        var offset = stackNum * this.stackCapacity;
        var size = this.sizes[stackNum];
        return offset + size - 1;
    };
    return FixedMultiStack;
}());
var multiStack = new FixedMultiStack(3);
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
