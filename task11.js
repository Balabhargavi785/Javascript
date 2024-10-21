function removeDuplicates(arr) {
    return [...new Set(arr)];
}

//ex
let array = [12, 2, 2, 34, 34, 4, 23, 6, 6, 23];
console.log("Original Array: ", array);
let uniqueArray = removeDuplicates(array);
console.log("Array after removing duplicates: ", uniqueArray);