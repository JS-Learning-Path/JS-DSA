const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([3, 5, 2, 3, 8, 3, 2, 5, 2, 2, 8]));

const mostFrequentNumber = (quickSort) => {
  let most = [];
  for (let i = 0; i < quickSort.length; i++) {
    if (quickSort[i] === quickSort[i + 1]) {
      most.push(quickSort[i]);
    } else {
      if (most.length < 1) {
        most.push(quickSort[i]);
      }
    }
  }
  return "Most frequent numbers is " + most[0];
};
console.log(mostFrequentNumber(quickSort([2, 2, 2, 2, 3, 3, 3, 5, 5, 8, 8])));
