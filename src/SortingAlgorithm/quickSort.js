export function getQuickSortAnimations(array) {
  const animations = []; // Array to store animations

  // Call helper function to perform Quick Sort
  quickSortHelper(array, 0, array.length - 1, animations);

  return animations;
}

function quickSortHelper(array, low, high, animations) {
  if (low < high) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(array, low, high, animations);

    // Recursively call quickSortHelper on the left and right subarrays
    quickSortHelper(array, low, pivotIndex - 1, animations);
    quickSortHelper(array, pivotIndex + 1, high, animations);
  }
}

function partition(array, low, high, animations) {
  const pivot = array[high]; // Choose the pivot element (typically the last element)
  let i = low - 1; // Index of smaller element

  for (let j = low; j < high; j++) {
    // Highlight elements being compared
    animations.push([j, high, 'turquoise']); // Comparison (primary color)

    if (array[j] <= pivot) {
      i++;

      // Swap elements and highlight swap
      animations.push([i, j, 'red']); // Swap (secondary color)
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    // Unhighlight elements after comparison or swap
    animations.push([j, high, 'turquoise']); // Unhighlight

    // Highlight pivot element
    if (j === high - 1) {
      animations.push([high, high, 'orange']); // Highlight pivot element color (e.g., 'orange')
    }
  }

  // Swap the pivot element with the element at index i+1
  animations.push([i + 1, high, 'red']); // Swap (secondary color)
  const temp = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp;

  // Highlight the pivot element in its sorted position
  animations.push([i + 1, high, 'green']); // Highlight pivot in sorted position

  return i + 1; // Return the pivot index
}
