// Leetcode 153

function searchInsert(arr) {
    let start = 0;
    let end = arr.length - 1;
    let small = Infinity

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[start] <= arr[mid]) {
            small = Math.min(arr[start], small)
            start = mid + 1;
        }

        else if (arr[mid] <= arr[end]) {
            small = Math.min(arr[mid], small)
            end = mid - 1
        }
    }
    return small;
};
let arr = [7, 8, 1, 2, 3, 4, 5, 6];
console.log(searchInsert(arr));

// TC=O(log(n))
// SC=O(1)