
const students = [
    { name: 'John', age: 25, grade: 85 },
    { name: 'Alice', age: 22, grade: 92 },
    { name: 'Bob', age: 24, grade: 78 }
];


const bubbleSortObjects = (arr, property) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i][property] > arr[i + 1][property]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

console.log(bubbleSortObjects(students, "age"));
console.log(bubbleSortObjects(students, "grade"));
console.log(bubbleSortObjects(students, "name"));