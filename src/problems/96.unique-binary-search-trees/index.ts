/**
 * @param {number} n
 * @return {number}
 */
const numTrees = (n: number): number => {
    let dp: Array<number> = Array.apply(null, {length: n + 1}).map(() => 0);
    dp[0] = dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]
        }
    }

    return dp[n];
};
console.log(numTrees(3));