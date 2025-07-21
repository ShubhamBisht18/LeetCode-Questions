function StockPrice(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit; 
            }
        }
    }

    return maxProfit;
}


let nums = [3, 2, 5, 1, 6, 4]
let result = StockPrice(nums)
console.log(result)