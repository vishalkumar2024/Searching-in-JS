// Leetcode 33

function search(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        console.log(start,mid,end)

        if (arr[mid] == target) return mid;

        //check the left portion
        if (arr[start] <= arr[mid]) {
            if (k <= arr[mid] && k >= arr[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        // check right portion
        else if (arr[mid] <= arr[end]) {
            if (k <= arr[end] && k >= arr[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1
}
let arr = [7,8,9,1,2,3,4,5,6]
let target = 8
console.log(search(arr, target));

// TC=O(log(n))
// SC=O(1)