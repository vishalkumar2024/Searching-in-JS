// Leetcode 162 - but only if there is only one peak element

function findPeakElement(arr) {
    if (arr.length == 1) return 0;
    if (arr[0] > arr[1]) return 0;
    if (arr[arr.length - 1] > arr[arr.length - 2]) return arr.length - 1

    let start = 0; 
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if(arr[mid-1]<arr[mid] && arr[mid+1]<arr[mid]) return mid;

        if(arr[mid]>arr[mid-1]){
            start=mid+1;
        }else if(arr[mid]>arr[mid+1]){
            end=mid-1;
        }
    }
}

let arr = [1,10,13,7,6,5,4,2,1,0];
console.log(findPeakElement(arr));

// TC=O(log(n))
// SC=O(1)