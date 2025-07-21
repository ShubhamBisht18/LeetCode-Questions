// let arr = [1, 2, 2, 3, 4, 4, 5]

// // Basic operations: .add(), .has(), .delete(), .size
// let unique = new Set(arr)
// console.log("has",unique.has(6))
// console.log("hasv",unique)
// console.log("add",unique.add(7))
// console.log("addv",unique)
// console.log("del",unique.delete(4))
// console.log("delv",unique)
// console.log("size",unique.size)
// console.log("sizev",unique)



function chk(num1,num2){
    let arr = new Set(num1)
    let result = []
    for (let i = 0; i < num2.length; i++) {
        if (arr.has(num2[i])) {
            result.push(num2[i])
        }
    }
    return result
}
let num1 = [1,2,3,4]
let num2 = [2,3,5,6]
let result = chk(num1,num2)
console.log(result)
