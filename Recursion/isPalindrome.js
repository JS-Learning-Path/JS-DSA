const isPalindrome = (str) => {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    const lastchar = str[str.length - 1];
    return isPalindrome(str.slice(1 , -1)) && lastchar === str[0];
}
console.log(isPalindrome("racecar"));