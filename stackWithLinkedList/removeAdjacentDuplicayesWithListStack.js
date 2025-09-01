class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null
    }
    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        const value = this.top.value;
        this.top = this.top.next;
        return value;
    }
    peek() {
        if (!this.top) {
            return null;
        }
        return this.top ? this.top.value : null
    }
    isEmpty() {
        return this.top === null;
    }
}
function removeAdjacentDuplicatesWithListStack(arr) {
  const stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  const result = [];
  while (!stack.isEmpty()) {
    const value = stack.pop();
    if (value !== result[result.length - 1]) {
      result.push(value);
    }
  }
  return result.reverse();
}
console.log(removeAdjacentDuplicatesWithListStack([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));