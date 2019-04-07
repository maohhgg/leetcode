/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = (rowIndex:number): number[] => {
    let result: number[][] = [[1], [1, 1], [1, 2, 1]];

    for(let i = 3;i <= rowIndex;i++){
        result[i] = Array.apply(null, Array(i+1)).map((value, index) => {
            if (index == i || index == 0) return 1;
            else return result[i - 1][index - 1] + result[i-1][index];
        });
    }

    return result[rowIndex];
};

console.log(getRow(3));