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
  removeAll(value) {
    while (this.#head && this.#head.value === value) {
      this.#head = this.#head.next;
    }
    let current = this.#head;
    while (current && current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
  toArray() {
    let result = [];
    let current = this.#head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}
