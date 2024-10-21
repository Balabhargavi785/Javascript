
function DescendingArray(arr) {
    return arr.sort((a, b) => b - a);
}

// Example usage
const array = [54, 10, 55, 4, 4546];
const newsortedArray = DescendingArray(array);

console.log(newsortedArray);  