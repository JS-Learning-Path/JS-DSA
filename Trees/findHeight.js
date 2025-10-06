class Node {
    constructor(value) {
        this.value = value
        this.children = [];
    }
    addChild(node) {
        this.children.push(node);
    }
}
const root = new Node("A")
const nodeB = new Node("B")
const nodeC = new Node("C")
const nodeD = new Node("D")
const nodeE = new Node("E")
root.addChild(nodeB);
root.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);


const findHeight = (node) => {
    if (!node) return -1;
    if (node.children.length === 0) return 0;
    let max = node.children.map(child => findHeight(child));
    return 1 + Math.max(...max);

}
console.log(`Height of Node D: ${findHeight(nodeB)}`);