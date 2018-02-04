/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows < 1){
        return [];
    }
    let last = generate(numRows - 1);
    if (numRows == 1) {
        var curr = [1];
    }
    if (numRows == 2) {
        var curr = [1,1]
    } else {
        var curr = Array.apply(null, Array(numRows)).map(function (value, index) {
            if (index == numRows - 1 || index == 0) {
                return 1;
            } else {
                return last[numRows-2][index-1] + last[numRows - 2][index];
            }
        });
    }
    last.push(curr);
    return last;
};

console.log(generate(10))