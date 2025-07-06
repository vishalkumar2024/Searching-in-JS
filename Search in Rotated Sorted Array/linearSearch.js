//leetcode 33

function search(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) return i
    }
    return -1
}
let arr = [4, 5, 6, 7, 0, 1, 2]
let target = 0
console.log(search(arr, target));

// TC=O(n)
// SC=O(1)