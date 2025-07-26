// Smallest subarray with sum ≥ K

let arr = [2, 3, 1, 2, 4, 3]
let K = 7
let min = Infinity
for (let i = 0; i < arr.length; i++) {
    let sum = 0
    let count = 0
    for (let j = i; j < arr.length; j++) {
        sum+= arr[j]
        count++
        if(sum >= K){
            if (count < min)
            min = count;
        }
        }
    }
console.log(min)


