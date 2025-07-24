// Search for an element (linear search)

let arr = [5,3,9,10,15]
let val = 9
for (let i = 0; i < arr.length; i++) {
    if(val === arr[i]){
        console.log(arr[i],i)
    }
}
