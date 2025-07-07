// Leetcode 81

function searchInsert(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] == k) return true
        if(arr[start]==arr[mid] && arr[mid]== arr[end]){ //only edge case when value at start, mid, end is same 
            start=start+1;
            end=end-1
            continue
        }

        if (arr[start] <= arr[mid]) {
            if (k >= arr[start] && k <= arr[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }

        } else if (arr[mid] <= arr[end]) {
            if (k >= arr[mid] && k <= arr[end]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return false;
};
let nums = [3,1], target = 1
console.log(searchInsert(nums, target));

// TC=O(log(n))
// SC=O(1)