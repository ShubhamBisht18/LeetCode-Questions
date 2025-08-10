// Container with most water

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

let i = 0
let j = height.length - 1
let max = -Infinity

while(i<j){
    let Width = j - i
    let Height = Math.min(height[i],height[j])
    let Area = Width * Height
    if(Area > max){
        max =  Area
    }
    if(height[i] < height[j]){
        i++
    }else{
        j--
    }
    
}
console.log(max)