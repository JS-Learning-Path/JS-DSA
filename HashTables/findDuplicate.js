function findDuplicate(nums) {
    const map = new Map();
    for (let char of nums) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
            return true;
        } else {
            map.set(char, 1);
        }
    }
    return false;
}

console.log(findDuplicate([1, 2, 3, 2]));