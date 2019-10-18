/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m: number, n: number): number => {
    let dp: number[][] = Array.apply(null, {length:m}).map(
        () => Array.apply(null,{length:n}).map(() => 0)
    );

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = (i == 0 || j == 0) ? 1 : dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};

console.log(uniquePaths(7, 3));