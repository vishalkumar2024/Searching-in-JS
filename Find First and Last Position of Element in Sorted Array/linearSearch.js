// leetcode 34

function searchRange(arr, k) {
    let i = 0;
    let start = -1;
    let end = -1;
    while (i < arr.length - 1) {
        if (arr[i] !== k) {
            i++;
        } else {
            if (start == -1) {
                start = i
            }
            end = i;
            i++
        }
    }
    return [start, end];
}
let arr = [5, 7, 7, 6, 8, 8, 8, 8, 8, 20, 25];
console.log(searchRange(arr, 8));

// TC=O(n)
// SC=O(1)