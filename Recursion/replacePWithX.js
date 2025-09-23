const replaceXWithP = (str) => {
    if (str.length === 0) return "";
    if (str.includes("pi")) {
        return replaceXWithP(str.replace("pi", "3.14"));
    }
    return str[0] + replaceXWithP(str.slice(1));

}
console.log(replaceXWithP("ffpiff")); // Output: "papbpcpdp"
console.log(replaceXWithP("pipipi")); // Output: "3.143.143.14"