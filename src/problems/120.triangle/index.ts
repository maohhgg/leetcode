/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle: number[][]): number => {
    let row = triangle.length;
    let result:number[] = triangle[row-1];

    for (let i = row-2; i >= 0  ; i--) {
        let currentRow = triangle[i];
        for (let j = 0 ; j < currentRow.length; j++) {
            result[j] = Math.min(result[j], result[j+1]) + currentRow[j];
        } 
    }
    return result[0];
};

let triangle = [
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
];
console.log(minimumTotal(triangle));