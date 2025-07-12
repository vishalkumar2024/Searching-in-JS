// Given a sorted array arr[] and an integer x, find the index (0-based) of
// the largest element in arr[] that is less than or equal to x. This element
// is called the floor of x. If such an element does not exist, return -1.

function floor(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    let ans = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] <= k) {
            ans = mid;
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return ans;
}
let arr = [1, 2, 3, 8, 10, 10, 12, 19]
let x = 5
console.log(floor(arr, 6));

// TC=O(log(n))
// SC=O(1)


// ceil=LowerBound