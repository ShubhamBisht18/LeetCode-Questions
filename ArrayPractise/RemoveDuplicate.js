function mergeSort(arr) {
    // Base case: 0 or 1 element is already sorted
    if (arr.length <= 1) return arr;

    // Split the array
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the two sorted halves
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Compare elements from both sides and merge
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function RemoveDup(result){
    let unique = []
    for (let i = 0; i < result.length; i++) {
        if(i === 0 || result[i] !== result[i+1]){
            unique.push(result[i])
        }
    }
    return unique
 }


const nums = [1, 2, 2, 3, 2];
console.log("Original array:", nums);
const sorted = mergeSort(nums);
console.log("Sorted array:", sorted);
const remvDup = RemoveDup(sorted);
console.log("Final array:", remvDup);
