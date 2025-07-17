function Majority(nums) {
    let maxCount = 0;
    let majorityElement = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === current) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            majorityElement = current;
        }
    }

    return [maxCount, majorityElement];
}


let nums = [2,2,1,1,5,1,3,1]
let result = Majority(nums)
console.log(result)