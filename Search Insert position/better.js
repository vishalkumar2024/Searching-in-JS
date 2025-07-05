// Leetcode 35
function searchInsert(arr, target) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] < target) {
            i++
        } else if (arr[i] == target) {
            return i;
        } else if (arr[i] > target) {
            return i
        }
    }
    return arr.length;
};
let nums = [1,3,5,6], target = 7;
console.log(searchInsert(nums, target));

// TC=O(n)
// SC=O(1)