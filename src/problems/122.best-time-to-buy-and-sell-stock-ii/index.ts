/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices: number[]): number => {
    let maxProfit: number = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            maxProfit += prices[i + 1] - prices[i];
        }
    }
    return maxProfit;
};
let t1: number[] = [7, 1, 5, 3, 6, 4];
let t2: number[] = [1, 2, 3, 4, 5];
let t3: number[] = [7, 6, 4, 3, 1];

console.log(maxProfit(t3));