const arr1 = [1, 4, 7, 10];
const arr2 = [2, 3, 6, 9, 11];

const mergeArrays = (arr1, arr2) => {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return "Merged Array: " + merged.concat(arr1.slice(i).concat(arr2.slice(j)));
};
const merged = mergeArrays(arr1, arr2);
console.log(merged); // Output: [1, 2, 3, 4, 6, 7, 9, 10, 11]

const BinarySearch = (merged, target) => {
  let left = 0;
  let right = merged.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    {
      if (merged[middle] === target) {
        return middle;
      } else if (merged[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return false;
};
console.log(BinarySearch(merged, 5));
