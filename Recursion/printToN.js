const printTheDigits = (n) => {
    if (n.length === 0) return;
    console.log(n[0]);
    return printTheDigits(n.slice(1))
}
printTheDigits("12345"); // Output: 1 2 3 4 5