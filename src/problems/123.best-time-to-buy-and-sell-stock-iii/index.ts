/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices: number[]): number => {
    let transactions: number = 2;
    let min: number[] = Array.apply(null,{length:transactions + 1}).map(() => prices[0]);
    let dp: number[] = Array.apply(null,{length:transactions + 1}).map(() => 0);

    for (let i = 1; i < prices.length; i++) {
        for (let k = 1; k <= transactions; k++) {
            min[k] = Math.min(min[k], prices[i] - dp[k - 1]);
            dp[k] = Math.max(dp[k], prices[i] - min[k])
        }
    }
    return dp[transactions];
};
let t1: number[] = [3, 3, 5, 0, 0, 3, 1, 4];
let t2: number[] = [1, 2, 3, 4, 5];
let t3: number[] = [7, 6, 4, 3, 1];

console.log(maxProfit(t1));