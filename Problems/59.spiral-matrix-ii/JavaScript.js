/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (number) {
    let matrix = Array.apply(null, Array(number)).map(x => Array.apply(null, Array(number)));
    if (number == 0) return matrix;

    let m = matrix.length,
        n = matrix[0].length;
    let i = 1;
    let u = 0,
        d = m - 1,
        l = 0,
        r = n - 1;

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

console.log(generateMatrix(3))