// Function to get animations for Merge Sort algorithm
export function getMergeSortAnimations(array) {
    const animations = []; // Array to store animations
    if (array.length <= 1) return array; // Base case: If array length is 1 or less, return array
    const auxiliaryArray = array.slice(); // Create a copy of the array using slice
    // Call helper function to perform Merge Sort
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    // Return animations generated during sorting process
    return animations;
}

// Helper function for Merge Sort algorithm
function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx === endIdx) return; // Base case: If start index equals end index, return
    // Calculate middle index
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    // Recursively call mergeSortHelper on left and right halves
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    // Merge the sorted halves
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

// Function to merge sorted halves
function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx; // Initialize pointer for main array
    let i = startIdx; // Initialize pointer for left half
    let j = middleIdx + 1; // Initialize pointer for right half
    // Iterate over both halves and merge them
    while (i <= middleIdx && j <= endIdx) {
        // Push animation frames to highlight elements being compared
        animations.push([i, j]);
        animations.push([i, j]);
        // Compare elements and merge them into main array
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]); // Push animation frame to update value in main array
            mainArray[k++] = auxiliaryArray[i++]; // Copy element from left half to main array
        } else {
            animations.push([k, auxiliaryArray[j]]); // Push animation frame to update value in main array
            mainArray[k++] = auxiliaryArray[j++]; // Copy element from right half to main array
        }
    }
    // Handle remaining elements in left half
    while (i <= middleIdx) {
        // Push animation frames to highlight remaining elements in left half
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]); // Push animation frame to update value in main array
        mainArray[k++] = auxiliaryArray[i++]; // Copy remaining elements from left half to main array
    }
    // Handle remaining elements in right half
    while (j <= endIdx) {
        // Push animation frames to highlight remaining elements in right half
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]); // Push animation frame to update value in main array
        mainArray[k++] = auxiliaryArray[j++]; // Copy remaining elements from right half to main array
    }
}






