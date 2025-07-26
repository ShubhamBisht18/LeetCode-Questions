// Find equilibrium index (left sum == right sum)

let arr = [2, 4, 6, 1, 3, 2];

for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i)
    let right = arr.slice(i + 1)

    let leftSum = 0
    for (let j = 0; j < left.length; j++) {
        leftSum += left[j]
    }
    let rightSum = 0
    for (let j = 0; j < right.length; j++) {
        rightSum += right[j]
    }

    if(leftSum === rightSum){
        console.log("equilibrium index: ",i)
    }
}
