// Leetcode 162

function findPeakElement(arr) {
    if (arr.length == 1) return 0
    let i = 0;
    while (i < arr.length) {
        if (i == 0) {
            if (arr[i] > arr[i + 1]) return i;
        } else if (i == arr.length - 1) {
            if (arr[i - 1] < arr[i]); return i
        } else {
            if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) return i
        }
        i++
    }
}
let arr = [1, 2, 3, 1]
console.log(findPeakElement(arr));

// TC=O(n)
// SC=O(1)