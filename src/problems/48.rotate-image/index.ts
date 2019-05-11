/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix: number[][]) => {
    let len = matrix.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }

    for (let i = 0; i < Math.floor(len/2); i++) {
        for (let j = 0; j < len; j++) {
            let temp = matrix[j][len-i-1];
            matrix[j][len-i-1] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};

let matrix = [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
];
// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
console.table(matrix);
rotate(matrix);
console.table(matrix);

export {}; // 189 rotate-array Have the same function name