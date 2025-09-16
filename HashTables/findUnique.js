function findUnique(str) {
    const map = new Map();
    let letters = str.split("");
    for (let char of letters) {
        if (map.has(char)) {
            map.delete(char);
        } else {
            map.set(char, 1);
        }
    }
    return [...map.keys()][0];
}
console.log(findUnique("aabbcde"));