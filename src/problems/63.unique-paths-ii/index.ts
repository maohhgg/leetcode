/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid: Array<number[]>): number => {
    let row: number = obstacleGrid.length;
    let col: number = obstacleGrid[0].length;

    let dp: number[][] = Array.apply([], {length: row}).map(
        () => Array.apply(null, {length: col}).map(() => 0)
    );

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 1;
                if (i == 0 && j > 0 && dp[i][j - 1] == 0) {
                    dp[i][j] = 0;
                }
                if (i > 0 && j == 0 && dp[i - 1][j] == 0) {
                    dp[i][j] = 0;
                }
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
            if (obstacleGrid[i][j] == 1) dp[i][j] = 0;
        }
    }
    return dp[row-1][col-1];
};

let t1: number[][] = [[0, 0],[1,1], [0, 0]];
console.log(uniquePathsWithObstacles(t1));