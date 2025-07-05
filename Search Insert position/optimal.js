// Leetcode 35

// this is same as Lower bound code

function searchInsert(arr, k) {
    let start = 0;
    let end = arr.length - 1;
    let ans = arr.length;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] >= k) {
            ans = mid;
            end = mid - 1
        } else {
            start = mid + 1;
        }
    }
    return ans;
};
let nums = [1, 3, 5, 6], target = 2;
console.log(searchInsert(nums, target));

// TC=O(log(n))
// SC=O(1)