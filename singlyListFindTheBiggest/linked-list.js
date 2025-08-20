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
  max() {
    if (!this.#head) {
      return null;
    }
    let current = this.#head;
    let max = current.value;
    while (current.next) {
      current = current.next;
      if (current.value > max) {
        max = current.value;
      }
    }
    return max;
  }
}
