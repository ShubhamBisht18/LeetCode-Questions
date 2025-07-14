function Intersection(num1, num2){
    let interValue = []
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            if (num1[i] === num2[j]) {
                interValue.push(num1[i]);
            }
        }
    }
    return interValue
}


let num1 = [1, 2, 2, 1 ,3] 
let num2 = [2, 3, 5, 9]
let result = Intersection(num1,num2)
console.log(result)