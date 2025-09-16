function frequencySort(nums) {
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return Object.fromEntries(map);
}
console.log(frequencySort([1, 2, 2, 3, 3, 3]));