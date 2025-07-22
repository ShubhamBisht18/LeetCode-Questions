// Reverse an array (using extra space)

let arr = [1,2,3,4,5]

let rev = []
let index = 0
for (let i = arr.length - 1; i >= 0; i--) {
    // rev.push(arr[i])
    rev[index] = arr[i]
    index++
}
console.log(rev)