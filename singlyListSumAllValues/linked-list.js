import { ListNode } from "./list-node.js";

export class LinkedList {
  #head = null;
  from(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      this.addFirst(arr[i]);
    }
  }
  addFirst(value) {
    const newNode = new ListNode(value);
    newNode.next = this.#head;
    this.#head = newNode;
  }
  sum() {
    let current = this.#head;
    let total = 0;
    while (current) {
      total += current.value;
      current = current.next;
    }
    return total;
  }
}
