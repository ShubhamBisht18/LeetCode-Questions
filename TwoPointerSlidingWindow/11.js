// Minimum window subarray (array version)

let arr = [2, 3, 1, 2, 4, 3]
let K = 7

let sum = 0
let i = 0
let j = 0
let minLength = Infinity
for (i = 0; i < arr.length; i++) {
    sum += arr[i]

    while(sum >= K){
        minLength = Math.min(minLength,i-j+1)
        sum -= arr[j]
        j++
    }

}
console.log(minLength)