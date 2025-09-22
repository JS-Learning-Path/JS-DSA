const countDigitsInNumber = (n) => {
    if (n < 10) return 1;
    return 1 + countDigitsInNumber(Math.floor(n / 10));
}
console.log(countDigitsInNumber(12345)); // Output: 5