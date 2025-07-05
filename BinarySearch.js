// Leetcode 704

function BinarySearch(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === k) {
            return mid; // Found target, return index
        } else if (k > arr[mid]) {
            start = mid + 1; // Search right half
        } else {
            end = mid - 1; // Search left half
        }
    }
    return -1
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(BinarySearch(arr, 4));

// TC=O(log(n))
// SC=O(1)