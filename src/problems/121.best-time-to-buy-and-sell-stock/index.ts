/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit =  (prices: number[]): number => {
    let lastDay = 0;
    let maxProfit = lastDay;
    for (let i = 0; i < prices.length - 1; i++) {
        lastDay = Math.max(0, lastDay + prices[i+1] - prices[i]);
        maxProfit = Math.max(lastDay, maxProfit)
    }
    return maxProfit;
};


let t1: number[] = [7, 1, 5, 3, 6, 4];
let t2: number[] = [7, 6, 4, 3, 1];

console.log(maxProfit(t2));