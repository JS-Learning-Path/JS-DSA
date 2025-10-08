const bubbleSortDirections = (arr, ascending) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            let swapp = ascending ?
                arr[i] > arr[i + 1] :
                arr[i] < arr[i + 1];
            if (swapp) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
console.log(bubbleSortDirections([5, 2, 8, 1, 9], "asc"));
console.log(bubbleSortDirections([3, 1, 4, 1, 5], "asc"));
console.log(bubbleSortDirections(["banana", "Apple", "cherry"], "asc")); 