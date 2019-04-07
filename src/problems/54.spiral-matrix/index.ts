/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = (matrix: number[][]): number[] => {
    let spiral: number[] = [];
    if (matrix.length == 0) return spiral;

    let m = matrix.length,
        n = matrix[0].length;
    let u = 0,
        d = m - 1,
        l = 0,
        r = n - 1,
        k = 0;

    while (true) {
        for (let col = l; col <= r; col++) spiral[k++] = matrix[u][col];
        if (++u > d) break;

        for (let row = u; row <= d; row++) spiral[k++] = matrix[row][r];
        if (--r < l) break;

        for (let col = r; col >= l; col--) spiral[k++] = matrix[d][col];
        if (--d < u) break;

        for (let row = d; row >= u; row--) spiral[k++] = matrix[row][l];
        if (++l > r) break;
    }
    
    return spiral;
};

console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));