import { ListNode } from "./list-node.js";

export class LinkedList {
  #head = null;
  from(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      this.addFirst(arr[i]);
    }
  }
  addFirst(value) {
    const node = new ListNode(value);
    node.next = this.#head;
    this.#head = node;
  }
  reverse() {
    let current = this.#head;
    let previous = null;
    while (current) {
      const node = current.next;
      current.next = previous;
      previous = current;
      current = node;
    }
    this.#head = previous;
  }
  toArray() {
    const result = [];
    let current = this.#head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}
