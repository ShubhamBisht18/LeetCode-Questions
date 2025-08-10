// Trapping rain water


let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let rightMax = 0;
let leftMax = 0;
let totalWater = 0;

let i = 0;
let j = height.length - 1;

while (i < j) {
    if (height[i] < height[j]) {
        if (height[i] >= leftMax) {
            leftMax = height[i];
        } else {
            totalWater += leftMax - height[i];
        }
        i++;
    } else {
        if (height[j] >= rightMax) {
            rightMax = height[j];
        } else {
            totalWater += rightMax - height[j];
        }
        j--;
    }
}

console.log(totalWater);
