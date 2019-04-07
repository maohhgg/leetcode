/**
 * @param {number} n
 * @return {number[][]}
 */
let generateMatrix = (n: number): number[][] => {
    let matrix: number[][] = Array.apply(null, Array(n)).map(() => Array.apply(null, Array(n)));
    if (n == 0) return matrix;

    let out = matrix.length,
        inner = matrix[0].length;
    let i = 1;
    let u = 0,
        d = out - 1,
        l = 0,
        r = inner - 1;

    while (true) {
        for (let col = l; col <= r; col++) {
            matrix[u][col] = i;
            i++;
        }
        if (++u > d) break;

        for (let row = u; row <= d; row++) {
            matrix[row][r] = i;
            i++;
        }
        if (--r < l) break;

        for (let col = r; col >= l; col--) {
            matrix[d][col] = i;
            i++;
        }
        if (--d < u) break;

        for (let row = d; row >= u; row--) {
            matrix[row][l] = i;
            i++;
        }
        if (++l > r) break;

    }

    return matrix;
};

console.log(generateMatrix(3));