export function getBubbleSortAnimations(array) {
    const animations = [];
    const n = array.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            // Push animations for comparison (using two colors)
            animations.push([j, j + 1, 'blue']); // First color for comparison
            animations.push([j, j + 1, 'turquoise']); // Second color for comparison

            if (array[j] > array[j + 1]) {
                // Swap elements
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
                // Push animations for swap
                animations.push([j, j + 1, 'red']); // Swap color
                animations.push([j, j + 1, 'turquoise']); // Final color indicating swap completion
            } else {
                // Push animations to indicate comparison completion
                animations.push([j, j + 1, 'green']); // Final color indicating comparison completion
            }
        }
        // If no two elements were swapped, array is sorted
        if (!swapped) {
            break;
        }
    }

    return animations;
}
