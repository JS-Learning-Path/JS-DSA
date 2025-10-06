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


const findDepth = (root, target) => {
    if (!root) return -1
    if (root.value === target) return 0;
    let dist = -1;
    if (dist = findDepth(root.children, target) >= 0) {
        return dist + 1
    }
    return dist;
};
console.log(findDepth(root, "D")); // 2
