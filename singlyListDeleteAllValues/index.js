import { LinkedList } from "./linked-list.js";

const list = new LinkedList();
list.from([5, 1, 5, 3, 5]);
console.log(list.removeAll(5));
console.log(list.toArray());
