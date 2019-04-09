/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s: string, numRows: number): string => {
    if (s.length == 0 || numRows < 2) return s;

    let str: Array<string> = Array.apply(null, Array<string>(numRows)).map(() => '');

    let flag = true;
    let l = 0;

    for (let i = 0; i < s.length; i++) {
        str[l] += s.charAt(i);
        if (flag) l++;
        else l--;
        if (l == 0 || l == numRows - 1) flag = !flag;
    }

    return str.join('');

};
console.log(convert("0123456789", 4));