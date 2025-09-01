class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
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
        const popped = this.top.value;
        this.top = this.top.next;
        return popped;
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
function findMaxWithListStack(arr) {
  const stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  let max = 0;
  while (!stack.isEmpty()) {
    const popped = stack.pop();
    if (popped > max) {
      max = popped;
    }
  }
  return max;
}
console.log(findMaxWithListStack([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // Output: 9