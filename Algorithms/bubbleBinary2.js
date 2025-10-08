let input = [12, 7, 19, 3, 15, 8];


const bubleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
console.log(`Sorted array ${bubleSort(input)}`);



const binarySEarch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === target) {
            // return middle
            if (middle) {
                return true;
            } else if (!middle) {
                return false;
            }
        } else if (arr[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return false;
}
console.log(`${binarySEarch(bubleSort(input), 15)}`); 



///  One of the decisions , it can be different