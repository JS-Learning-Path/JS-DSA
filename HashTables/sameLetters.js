function sameLetter(str, str2) {
    const set = new Set(str);
    for (let char of str2) {
        if (set.has(char)) {
            return true
        }
    }
    return false;
}
console.log(sameLetter("abc","cab"));