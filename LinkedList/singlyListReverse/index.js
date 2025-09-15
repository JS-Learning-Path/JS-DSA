import { LinkedList } from "../task3/linked-list.js";
const list = new LinkedList();
list.from([1, 2, 3]);
list.reverse();
console.log(list.toArray());