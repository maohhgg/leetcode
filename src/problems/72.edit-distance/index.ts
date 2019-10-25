/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1: string, word2: string): number => {
    let row: number = word1.length;
    let col: number = word2.length;

    let dp: number[][] = Array.apply([], {length: row + 1}).map(
        () => Array.apply(null, {length: col + 1}).map(() => 0)
    );

    for (let i = 1; i <= row; i++) dp[i][0] = i;
    for (let i = 1; i <= col; i++) dp[0][i] = i;

    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            dp[i][j] = (word1.charAt(i - 1) == word2.charAt(j - 1)) ? dp[i - 1][j - 1] :
                Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;
        }
    }

    return dp[row][col];
};

console.log(minDistance('horse', 'ros'));
console.log(minDistance('intention', 'execution'));
