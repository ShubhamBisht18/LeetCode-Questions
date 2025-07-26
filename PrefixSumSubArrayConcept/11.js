// Find subarray with maximum product

let arr = [2, 3, -2, 4]
let maxProduct = arr[0]
for (let i = 0; i < arr.length; i++) {
    let product = 1
    for (let j = i; j < arr.length; j++) {
        product *= arr[j]
        if(product > maxProduct){
            maxProduct = product
        }
    }
}
console.log(maxProduct)