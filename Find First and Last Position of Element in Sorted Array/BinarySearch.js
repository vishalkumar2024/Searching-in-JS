// leetcode 34

function searchRange(arr, k) {

    function LowerBound(arr, k) {
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
    }

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
    let lb=LowerBound(arr,k);
    let ub=upperBound(arr,k);
    if(lb==arr.length || arr[lb]!==k) return [-1,-1]
    else return [lb,ub-1]
}
let arr = [5, 7, 7, 6, 8, 8, 8, 8, 8, 20, 25];
console.log(searchRange(arr, 8));

// TC=O(2*log(n))
// SC=O(1)