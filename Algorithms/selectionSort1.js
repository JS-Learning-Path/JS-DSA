const selectionSort = (arr) => {
    const copy = [...arr];
    const n = copy.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (copy[j] < copy[min]) {
                min = j;
            }
        }
        [copy[i], copy[min]] = [copy[min], copy[i]]
    }
    return `Sorted array ${copy} 
    Lowest Numbers is ${copy[0]}
     and the Highest is ${copy[n - 1]}`
}
console.log(selectionSort([4, 6, 2, 5, 6, 3, 2, 5]));