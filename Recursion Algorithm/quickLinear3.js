const sortWordsByLengthWithQucikLinear = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < pivot.length) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [
    ...sortWordsByLengthWithQucikLinear(left),
    pivot,
    ...sortWordsByLengthWithQucikLinear(right),
  ];
};
console.log(
  sortWordsByLengthWithQucikLinear([
    "kiwi",
    "pear",
    "apple",
    "banana",
    "cherry",
  ])
);
const findTheWord = (arr, word) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      return i;
    }
  }
  return -1;
};
console.log(
  findTheWord(
    sortWordsByLengthWithQucikLinear([
      "kiwi",
      "pear",
      "apple",
      "banana",
      "cherry",
    ]),
    "cherry"
  )
);
