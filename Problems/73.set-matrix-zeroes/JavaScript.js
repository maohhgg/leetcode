/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let row = matrix.length,
        col = matrix[0].length;
    if (row == 0 || col == 0) {
        return;
    }
    let rows = [],
        cols = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == 0) {
                rows.push(i);
                cols.push(j);
            }
        }
    }
    rows = rows.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    });
    cols = cols.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    });

    rows.forEach(e => {
        for (let i = 0; i < col; i++) {
            matrix[e][i] = 0;
        }
    });
    cols.forEach(e => {
        for (let i = 0; i < row; i++) {
            matrix[i][e] = 0;
        }
    });
};
var m = [
[1, 0, 4, 5, 6, 7, 0, 4, 5],
[1, 2, 4, 5, 6, 7, 2, 4, 5],
[1, 2, 4, 5, 6, 7, 2, 4, 5],
[1, 2, 4, 5, 6, 7, 2, 4, 5],
[1, 2, 4, 5, 6, 7, 2, 0, 5],
[1, 2, 4, 5, 6, 7, 2, 4, 5],
[1, 2, 4, 5, 6, 7, 2, 4, 5]
]
setZeroes(m);
console.log(m)