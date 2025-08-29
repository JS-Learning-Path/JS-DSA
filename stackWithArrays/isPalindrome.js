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



function isPalindrome(str) {
  const stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }
  let reversedStr = [];
  while (!stack.isEmpty()) {
    reversedStr.push(stack.pop());
  }
  return str === reversedStr.join("");
}
 console.log(isPalindrome("racecar")); // true
 console.log(isPalindrome("hello"));   // false
 