// Find subarray with XOR = K (bit tricky)

let arr = [4, 2, 2, 6, 4]
let K = 6
let count = 0
for (let i = 0; i < arr.length; i++) {
    let bitOp = 0
    for (let j = i; j < arr.length; j++) {
        bitOp ^= arr[j]
        if(bitOp === K){
            count++
        } 
    }
}
console.log(count)