function countLetters(str) {
    let count = 0;
    const map = new Map();
    let letters = str.split(" "); //
    for (let char of letters) {
        if (map.has(char)) {
            count = map.get(char);
            map.set(char, count + 1);
        } else {
            map.set(char, 1);
        }
    }
    return Object.fromEntries(map);
}

console.log(countLetters("hello world hello"));