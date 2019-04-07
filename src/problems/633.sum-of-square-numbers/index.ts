/**
 * @param {number} c
 * @return {boolean}
 */
let judgeSquareSum = (c: number): boolean => {
    for (let i = 0; i * i <= c; ++i) {
        let remain = c - i * i;
        let r = Math.sqrt(remain);
        if (remain == r * r) return true;
    }
    return false;
};
console.log(judgeSquareSum(4));