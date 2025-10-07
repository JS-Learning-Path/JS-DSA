const bubbleSortWithCount = (arr) => {
    let n = arr.length;
    let swapCount = 0;
    let sortedArray = [];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapCount++;
                swapped = true;
            }
        }
    } while (swapped);
    return { sortedArray: arr, swapCount: swapCount }
}

console.log(bubbleSortWithCount([5, 1, 4, 2, 8]));