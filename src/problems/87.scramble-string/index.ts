/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = (s1: string, s2: string): boolean => {
    if (s1.length != s2.length) return false;
    if (s1 == s2) return true;

    let length:number = s1.length;

    let dp: boolean[][] = Array.apply([], {length: length + 1}).map(
        () => Array.apply(null, {length: length}).map(
            () => Array.apply(null, {length: length}).map(() => false)
        )
    );

    for (let len = 1; len <= length; len++) {
        for (let i = 0; i + len <= length; i++) {
            for (let j = 0; j+len <= length; j++) {
                if (len == 1){
                    dp[len][i][j] = (s1.charAt(i) === s2.charAt(j));
                } else {
                    for (let q = 1; q < len; q++) {
                        dp[len][i][j] = dp[q][i][j] && dp[len - q][i + q][j + q] || dp[q][i][j + len - q] && dp[len - q][i + q][j];
                        if (dp[len][i][j]) break;
                    }
                }
            }
        }
    }

    return dp[length][0][0];
};

console.log(isScramble('great', 'rgeat'));
console.log(isScramble('great', 'rgtae'));
