/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = (board:number[][]) => {
    let rows:number = board.length;
    if (rows == 0) return;
    let cols:number = board[0].length;
    if (cols == 0) return;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let sum = getNeighborNum(board, rows, cols, i, j);

            if (sum == 3) board[i][j] = board[i][j] == 0 ? 3 : 1;
            else if(sum != 2) board[i][j] = board[i][j] == 1 ? 2 : 0;
        }

    }
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j)
            board[i][j] %= 2;
    }
};
const getNeighborNum = (board:number[][], rows:number, cols:number, x:number, y:number):number => {
    let sum = 0;
    for (let i = x-1; i < x+2; i++) {
        for (let j = y-1; j < y+2; j++) {
            if (i == x && j == y) continue;
            if (i >= 0 && i < rows && j >= 0 && j < cols && (board[i][j] === 1 || board[i][j] === 2))
                sum++;
        }
    }
    return sum;
};

let a = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
];
gameOfLife(a);
console.table(a);