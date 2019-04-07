/**
 * @param {number[]} digits
 * @return {number[]}
 */

let plusOne = (digits: number[]): number[] => {
    digits[digits.length-1] ++;
    for (let i = digits.length-1; i >= 0; i--) {
        if (digits[i] == 10) {
            digits[i] = 0;
            if(i == 0){
                digits.unshift(1)
            } else{
                digits[i-1]++;
            }
        }
    }
    return digits;
};
console.log(plusOne([9,9,9]));