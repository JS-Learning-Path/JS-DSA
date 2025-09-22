function sortTheNumbersByFrequency(arr) {
    let frequency = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!frequency.has(arr[i])) {
            frequency.set(arr[i], 0);
        }
        frequency.set(arr[i], frequency.get(arr[i]) + 1);
    }
    return [...frequency.entries()].sort((a, b) => b[1] - a[1]).map(item => item[0]);
}
console.log(sortTheNumbersByFrequency([4, 6, 2, 6, 4, 4, 3]));

