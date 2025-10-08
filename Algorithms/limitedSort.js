const limitedSort = (arr, maxIterations) => {
    let arrCopy = [...arr];
    let swapped;
    let iterations = 0; 
    
    do {
        swapped = false;
        for (let i = 0; i < arrCopy.length - 1; i++) {
            if (arrCopy[i] > arrCopy[i + 1]) {
                [arrCopy[i], arrCopy[i + 1]] = [arrCopy[i + 1], arrCopy[i]];
                swapped = true;
            }
        }
        iterations++;
    } while (swapped && iterations < maxIterations); 
    
    let completed = !swapped;
    
    return {
        result: arrCopy,
        completed: completed
    };
}

console.log(limitedSort([5, 3, 8, 4, 2], 2)); 
