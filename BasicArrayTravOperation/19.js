// Find element that appears only once (using loop)

let arr = [4, 5, 6, 5, 4]
for (let i = 0; i < arr.length; i++) {
    let count = 0 // reseting for each new element
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++
        }
    }
    if (count === 1) {
        console.log(arr[i])
    }
}







