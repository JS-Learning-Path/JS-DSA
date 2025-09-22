function countTheWords(arr) {
    const map = new Map();
    for (let word of arr) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1)
        } else {
            map.set(word, 1)
        }

    }
    return Object.fromEntries(map);
}
console.log(countTheWords(["apple", "banana", "apple", "orange", "banana", "apple"])); // Output: { 'apple': 3, 'banana': 2, 'orange': 1 }