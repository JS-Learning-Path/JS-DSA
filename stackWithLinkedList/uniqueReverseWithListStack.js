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
function uniqueReverseWithListStack(arr) {
  const stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  const result = [];
  while (!stack.isEmpty()) {
    const value = stack.pop();
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
}

console.log(uniqueReverseWithListStack([1, 2, 3, 4, 5, 6, 6, 7, 8, 2, 1]));