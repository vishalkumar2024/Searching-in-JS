// Find out how many times an array has been rotated
// basically this is the same as of the index of smallest number in array

function searchInsert(arr) {
    let start = 0;
    let end = arr.length - 1;
    let min = [Infinity, -1]  // This stores minimum number and its index

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[start] <= arr[mid]) {
            if (arr[start] < min[0]) {
                min = [arr[start], start]
            }
            start = mid + 1;
        }

        else if (arr[mid] <= arr[end]) {
            if (arr[mid] < min[0]) {
                min = [arr[mid], mid]
            }
            end = mid - 1
        }
    }
    return min[1];  // Return the index of smallest one
};
let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
console.log(searchInsert(arr));

// TC=O(log(n))
// SC=O(1)