/**
 * @param {number} numRows
 * @return {number[][]}
 */
var getRow = function(rowIndex) {
    if(rowIndex < 0){
        return [];
    }
    if (rowIndex == 0){
        return [1];
    }
    if (rowIndex == 1) {
        return [1,1];
    }
    let last = getRow(rowIndex - 1);
    return Array.apply(null, Array(rowIndex+1)).map(function (value, index) {
        if (index == rowIndex || index == 0) {
            return 1;
        } else {
            return last[index-1] + last[index];
        }
    });
};

console.log(getRow(3))