class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const node = new LinkedListNode(value);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (!this.top) return null;
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }
  getPrev() {
    return this.prev;
  }
  setPrev(node) {
    this.prev = node;
  }
  peek() {
    return this.top.value;
  }
  isEmpty() {
    return this.top === null;
  }
}
function isBalancedBrackets(str) {
  const stack = new Stack();
  const openingBrackets = "({[";
  const closingBrackets = ")}]";
  const matches = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of str) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.isEmpty() || stack.pop() !== matches[char]) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}
console.log(isBalancedBrackets("{[()]}")); // true
console.log(isBalancedBrackets("{[(])}")); // false
console.log(isBalancedBrackets("{{[[(())]]}}")); // true
console.log(isBalancedBrackets("((())")); // false
     