// Check if subarray with 0 sum exists

let arr = [4, 2, -3, 1, 6]

for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = i; j < arr.length; j++){
        sum+= arr[j]
        if(sum === 0){
            console.log([i,j])
        }
    }
}