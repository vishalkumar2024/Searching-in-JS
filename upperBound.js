// Given a sorted array arr[] and a number target, the task is to find the
// lower bound of the target in this given array.
// The lower bound of a number is defined as the smallest index in the sorted
//  array where the element is greater than or equal to the given number:
//  arr[i]>target

function upperBound(arr, k) {
    let start = 0;
    let end = arr.length - 1;
    let ans = arr.length;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] > k) {
            ans = mid;
            end = mid - 1
        } else {
            start = mid + 1;
        }
    }
    return ans;
}
let arr = [2, 3, 7, 9, 10, 11, 11, 25]
let target = 9
console.log(upperBound(arr, target));

// TC=O(log(n))
// SC=O(1)